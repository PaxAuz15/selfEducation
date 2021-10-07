name:str = "Luis"
age:int = 23
salary:float = 1500.0

message:str = "My name is {}, I've {} years old and my salary is ${:.2f}".format(name,age,salary)
print(message)

message:str = "My name is {1}, I've {2} years old and my salary is ${0:.2f}".format(salary,name,age)
print(message)

message:str = "My name is {name}, I've {a} years old and my salary is ${sal:.2f}".format(name=name,a=age,sal=salary)
print(message)

dictionary:dict = {"name":name,"age":age,"salary":salary}
message:str = "My name is {dic[name]}, I've {dic[age]} years old and my salary is ${dic[salary]:.2f}".format(dic=dictionary)
print(message)