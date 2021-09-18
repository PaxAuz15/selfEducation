inputData:int = int(input("How was your day (0-10)?: "))
message:str = "Your day was"
if inputData==10:
    print(message,"excellent")
elif inputData==0:
    print(message,"horrible")
elif inputData>0 and inputData<5:
    print(message,"bad")
elif inputData==5:
    print(message,"regular")
else:
    print(message,"good")