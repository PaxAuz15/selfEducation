limiteA:int = 0
limiteB:int = 5
numberInput:int = int(input("Input a number: "))
verification:bool= numberInput>=limiteA and numberInput<=limiteB
if verification:
    print("Number within range")
else:
    print("Number is not within range")