def binarySearch(dataset:list,numberToSearch:int,intento:int=0):
    halfSite:int = (len(dataset)//2)-1
    possibleValue = dataset[halfSite]
    intento+=1
    print(f"Intento #{intento}")

    if possibleValue == numberToSearch:
        return possibleValue
    else:
        if numberToSearch>possibleValue:
            dataset = dataset[halfSite+1:]
            return binarySearch(dataset,numberToSearch,intento)
        else:
            dataset = dataset[:halfSite]
            return binarySearch(dataset,numberToSearch,intento)
dataset:list = [0,1,2,3,4,5,6,7,8,9]
binarySearch(dataset,3)