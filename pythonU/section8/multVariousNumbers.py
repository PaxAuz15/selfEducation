def multVariousNumbers(*numbers:int):
    multiplication:int = 1
    for number in numbers:
        multiplication*=number
    return multiplication

multiplication:int = multVariousNumbers(4,2,3)
print(multiplication)