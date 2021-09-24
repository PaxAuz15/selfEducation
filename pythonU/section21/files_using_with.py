route:str = "/home/paxauz/dev/selfEducation/pythonU/section21/"
with open(f"{route}readFile.txt","r") as file:
    # file.write("Hello World!")
    print(file.read())