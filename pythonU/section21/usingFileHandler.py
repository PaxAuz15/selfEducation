from FileHandler import FileHandler

ROUTE:str = "/home/paxauz/dev/selfEducation/pythonU/section21/"

with FileHandler(f"{ROUTE}readFile.txt") as rf:
    print(rf.read())