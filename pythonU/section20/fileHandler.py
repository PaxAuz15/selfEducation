route:str = "/home/paxauz/dev/selfEducation/pythonU/section20/"
file = None
try:
    file = open(f"{route}test.txt","w")
    file.write("TEXT ON THIS FILE\n")
    file.write("Adiós")
except Exception as e:
    print(e)
finally:
    file.close()
    print("File Closed")