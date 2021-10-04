def valueDescendent(number:int):
    if number <= 0:
        return ''
    else:
        print(number)
        return valueDescendent(number-1)

numberInput:int = int(input("Input a number: "))
print(valueDescendent(numberInput))