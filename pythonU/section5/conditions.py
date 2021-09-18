# condition = False

# # if condition == True:
# #     print("It's true")
# # else:
# #     print("It's false")

# #TERNARY OPERATOR

# print("It's True") if condition else print("It's false")

age:int = int(input("Input your age: "))
childhood:bool = age>=0 and age<=10
teen:bool = age>10 and age<=20
adult:bool = age>20 and age<=30

if childhood:
    print("The childhood is incredible")
elif teen:
    print("Many changes and study")
elif adult:
    print("Love and start to work!")
else:
    print("I don't know that I say you")
