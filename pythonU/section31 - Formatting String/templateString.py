name:str = "Luis"
age:int = 23
salary:float = 3000.0

message:str = f"My name is {name}, I've {age} years old and my salary is ${salary:.2f}"
print(message)

print(name,salary,age,sep=", ")