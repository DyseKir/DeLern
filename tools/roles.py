"""Разметка членов предложения в примерах: S субъект, V глагол, A Akk-объект,
D Dat-объект, E дополнение/предикатив (pd, op, og), Z обстоятельство (mo).
   python roles.py ex.json roles.json [seed N] — вход {id: пример}, выход {id: [[from, to, роль]]}."""
import json, sys, spacy
from pathlib import Path

nlp = spacy.load('de_core_news_lg')
data = json.loads(Path(sys.argv[1]).read_text(encoding='utf8'))

ROLE = {'sb': 'S', 'sbp': 'S', 'ep': 'S', 'oa': 'A', 'oa2': 'A', 'da': 'D', 'pd': 'E', 'op': 'E', 'og': 'E', 'mo': 'Z', 'cvc': 'E'}
VERBAL = {'VERB', 'AUX'}

def is_clause_head(t):
    return t.pos_ in VERBAL and any(c.dep_ in ('sb', 'cp', 'oa', 'da', 'mo', 'pd', 'op') or c.tag_ in ('PTKZU',) for c in t.children) \
        or (t.pos_ in VERBAL and t.dep_ in ('rc', 'cj', 'oc', 're', 'mo', 'ROOT'))

def predicate_chain(head):
    """финитный глагол + зависимые инфинитивы/причастия (oc без союза) + отделяемая приставка."""
    out, stack = [], [head]
    while stack:
        v = stack.pop()
        out.append(v)
        for c in v.children:
            if c.dep_ == 'svp' or (c.dep_ == 'pm' and c.tag_ == 'PTKZU'):
                out.append(c)
            elif c.dep_ == 'oc' and c.pos_ in VERBAL and not any(g.dep_ == 'cp' for g in c.children) \
                    and not any(g.dep_ in ('sb',) for g in c.children):
                stack.append(c)
    return out

def annotate(doc):
    lab = [None] * len(doc)
    done = set()

    def clause(head):
        if head.i in done:
            return
        done.add(head.i)
        chain = predicate_chain(head)
        chain_ids = {t.i for t in chain}
        for t in chain:
            lab[t.i] = 'V'
        sub = []
        for v in chain:
            if v.pos_ not in VERBAL:
                continue
            for c in v.children:
                if c.i in chain_ids or c.is_punct:
                    continue
                if c.pos_ in VERBAL and (c.dep_ in ('cj', 'rc', 'oc', 're', 'mo', 'par', 'cc')):
                    sub.append(c)          # отдельное (под)предложение
                    continue
                if c.dep_ == 'oa' and c.tag_ == 'PRF':
                    continue               # возвратное sich/mich — часть глагола, не красим
                r = ROLE.get(c.dep_)
                if not r:
                    continue
                for t in c.subtree:
                    if not t.is_punct:
                        lab[t.i] = r
                # придаточные внутри члена предложения (относительные и т.п.)
                for t in c.subtree:
                    if t.i != c.i and t.pos_ in VERBAL and t.dep_ in ('rc', 'oc', 're', 'mo', 'cj'):
                        sub.append(t)
        for s in sub:
            # союз/относительное слово придаточного не красим
            clause(s)
            for c in s.children:
                if c.dep_ in ('cp', 'cd', 'ju') and lab[c.i] is not None:
                    lab[c.i] = None

    for sent in doc.sents:
        if sent.root.pos_ in VERBAL:
            clause(sent.root)
        # сочинённые глаголы (… und gehe …)
        for t in sent:
            if t.pos_ in VERBAL and t.dep_ == 'cj' and t.head.pos_ in VERBAL:
                clause(t)
    # союзы и знаки — без цвета
    for t in doc:
        if t.dep_ in ('cd', 'cp', 'ju', 'punct') or t.is_punct:
            lab[t.i] = None
    # сливаем в спаны по символам
    spans = []
    for t in doc:
        r = lab[t.i]
        if not r:
            continue
        s, e = t.idx, t.idx + len(t.text)
        if spans and spans[-1][2] == r and spans[-1][3] == t.i - 1:
            spans[-1][1] = e; spans[-1][3] = t.i
        else:
            spans.append([s, e, r, t.i])
    return [[a, b, r] for a, b, r, _ in spans]

out = {}
ids = list(data)
for k, doc in zip(ids, nlp.pipe([data[i] for i in ids], batch_size=64)):
    out[k] = annotate(doc)
Path(sys.argv[2]).write_text(json.dumps(out, ensure_ascii=False), encoding='utf8')

def show(k):
    s = data[k]; res = ''; pos = 0
    for a, b, r in out[k]:
        res += s[pos:a] + f'[{r} {s[a:b]}]'; pos = b
    return res + s[pos:]

if len(sys.argv) > 3:
    import random
    random.seed(int(sys.argv[3]))
    for k in random.sample(ids, int(sys.argv[4]) if len(sys.argv) > 4 else 40):
        print(k, '|', show(k))
