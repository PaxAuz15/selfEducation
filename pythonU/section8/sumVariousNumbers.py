def sumVariousNumbers(*numbers:int):
    addition:int = 0
    for number in numbers:
        addition+=number
    return addition

sumValues:int = sumVariousNumbers(1,3,4,5,2)
print(sumValues)