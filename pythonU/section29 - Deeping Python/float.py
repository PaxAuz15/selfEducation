# Get false with number is 0 or 0.0
value:int or float = 0
print(bool(value))
# Get true with number is different that 0 or 0.00
value:int or float = 1
print(bool(value))
value:int or float = -1
print(bool(value))

# Get false with String empty
value:str = ''
print(bool(value))
# Get true with not empty string
value:str = ' '
print(bool(value))
value:str = "Hola"
print(bool(value))

# Get false with empty Dictionary, List or Tuple
value:list = []
print(bool(value))
value:tuple = ()
print(bool(value))
value:dict = {}
print(bool(value))
# Get true with not empty dict, list or tuple
value:list = [1,2,3]
print(bool(value))
value:tuple = (1,)
print(bool(value))
value:dict = {"name":"Luis","lastName":"Auz"}
print(bool(value))

#Can work with control statement (if, while)

value = 0
if value:
    print("Is positive")
else:
    print("Is negative")