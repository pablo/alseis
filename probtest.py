import os
import random
import itertools

def sample_wr(population, k):
    "Chooses k random elements (with replacement) from a population"
    n = len(population)
    _random, _int = random.random, int  # speed hack
    return [_int(_random() * n) for i in itertools.repeat(None, k)]

def get_random_dice(n):
    return sample_wr([1,2,3,4,5,6], n)

def get_play(dice):
    pass

def embutida():
    return len(set(get_random_dice(5))) == 1

def most_common(lst):
    return max(set(lst), key=lst.count)

def generala():
    rem = 5
    rolls = 0
    cmc = 0
    while rolls < 3:
	d = get_random_dice(rem)
	if cmc == 0:
	    cmc = most_common(d)
	rem = rem - d.count(cmc)
	if rem == 0:
	    return True
	rolls += 1
    return False

def poker_servido():
    d = get_random_dice(5)
    cmc = most_common(d)
    return d.count(cmc) >= 4

def sim(n, f):
    ocurrences = 0
    for i in range(n):
	if f():
	    ocurrences += 1
    return ocurrences


TOTAL = int(raw_input('cuantas simulaciones? '))

simulaciones = {
    'EMBUTIDA': embutida,
    'GENERALA': generala,
    'POKER SERVIDO': poker_servido
}

for k, v in simulaciones.items():
    count = sim(TOTAL, v)
    print("{0} simulaciones {1} {2} {3}%".format(TOTAL, count, k, 100.0*float(count)/TOTAL))

raw_input('listo')
