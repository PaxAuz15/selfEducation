# def factorial(number:int):
#     factorialValue:int = 1
#     while number>0:
#         factorialValue*=number
#         number-=1
#     return factorialValue

# print(factorial(5))

def factorial(number:int):
    if number == 1:
        return 1
    else:
        return number * factorial(number-1)

print(factorial(5))
