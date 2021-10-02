message:str = "Narnia, Harry Potter, Beauty and Best"
splitMessage:list = message.split(", ")
print(splitMessage)

splitMessage:list = message.split(", ",maxsplit=1)
print(splitMessage)