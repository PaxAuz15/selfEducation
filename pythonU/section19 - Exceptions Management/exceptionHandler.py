from EqualNumbersException import EqualNumbersException

result = None
num1:int = 4
num2:int = 4

#Write to menor to up herarchy
try:
    result = num1/num2
    if num1 == num2:
        raise EqualNumbersException("Iquals numbers")
except ZeroDivisionError as e:
    print(e)
except Exception as e:
    print(e)
else:
    print("Executed if don't raise a exception")
finally:
    print("Always executed to final program")

print(result)