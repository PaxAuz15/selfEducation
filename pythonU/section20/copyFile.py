route:str = "/home/paxauz/dev/selfEducation/pythonU/section20/"

file = open(f"{route}test.txt","r")

copy = open(f"{route}copyFile.txt","a")

copy.write(file.read())