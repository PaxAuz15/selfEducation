calification:int or float = int(input("Input your calification: "))

noteA:bool = calification>=9 and calification<=10
noteB:bool = calification>=8 and calification<9
noteC:bool = calification>=7 and calification<8
noteD:bool = calification>=6 and calification<7
noteF:bool = calification>=0 and calification<6

if noteA:
    print("A")
elif noteB:
    print("B")
elif noteC:
    print("C")
elif noteD:
    print("D")
elif noteF:
    print("F")
else:
    print("Unknown value")