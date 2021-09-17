string:str="Holanda"
searchingLetter:str="a"

for letter in string:
    if(letter==searchingLetter):
        print(letter)
        break
else:
    print("for loop ending")

for value in range(11):
    if value % 2 != 0:
        continue
    print(value)