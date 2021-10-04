def listDictionary(**kwargs):
    for key,value in kwargs.items():
        print(f"This is the value: '{value}'' in key: '{key}'")

listDictionary(Ricky='Baby house')