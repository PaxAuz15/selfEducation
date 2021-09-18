limiteAgeA:int = 20
limiteAgeB:int = 30

age:int = int(input("Input your age: "))

verificationTwenty:bool = age>=limiteAgeA and age<= limiteAgeA+9
verificationThirty:bool = age>=limiteAgeB and age<= limiteAgeB +9

if verificationTwenty or verificationThirty:
    if verificationTwenty:
        print("You're on the Twenty")
    elif verificationThirty:
        print("You're on the Thirty")
else:
    print("You're not on the twenty and thirty")