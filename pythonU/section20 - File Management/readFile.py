route:str = "/home/paxauz/dev/selfEducation/pythonU/section20/"

try:
    file = open(f"{route}test.txt","w+")
    file.write("Hi, I'm Luis")
except Exception as e:
    print(e)
finally:
    # print(file.read(5))
    # print(file.read(5))
    
    # for line in file:
    #     print(line)

    # print(file.readlines())
    # print(file.readlines()[0])
    try:
        copyFile = open(f"{route}copyFile.txt","a")
        copyFile.write(file.read())
    except Exception as e2:
        print(e2)
        print("Don't copy content to copyFile")
    finally:
        file.close()
        copyFile.close()