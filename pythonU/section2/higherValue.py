firstNumber:int or float = int(input("Input first number: "))
secondNumber:int or float = int(input("Input second number: "))

verificationHigher:bool = firstNumber > secondNumber
verificationEquals:bool = firstNumber == secondNumber

if verificationHigher:
    print(f"The {firstNumber} is higher than {secondNumber}")
elif verificationEquals:
    print(f"The {firstNumber} and {secondNumber} are equals")
else:
    print(f"The {secondNumber} is higher than {firstNumber}")