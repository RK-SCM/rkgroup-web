def test(n):
    sequence = []
    a, b = 0, 1
    while a <= n:
        sequence.append(a)
        a, b = b, a + b
    return sequence


# Test
print(test(10))
