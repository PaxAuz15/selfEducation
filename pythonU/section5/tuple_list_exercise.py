numbersList:list=[]
numbers:tuple=(13,1,8,3,2,5,8)

for number in numbers:
    if number>=5:
        continue
    numbersList.append(number)

print(numbersList)