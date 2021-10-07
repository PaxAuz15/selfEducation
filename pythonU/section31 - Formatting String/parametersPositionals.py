name:str = "Luis"
age:int = 23

message:str = "Hi, my name is %s and I've %s years old"%(name,age)
print(message)

valuesMessage:tuple = (name,age)
otherMessage:str = "Hi, my name is %s and I've %s years old"%valuesMessage
print(otherMessage)

newMessage:str = "Hi, my name is %s and I've %s years old"
print(newMessage%valuesMessage)