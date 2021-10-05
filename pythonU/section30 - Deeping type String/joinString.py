# Need to iterable object (list,tuple or dict[think])
listOfCourses:list = ["Data Science","Python","Data Analysis"]
message:str  = " ".join(listOfCourses)
print(message)

message:str  = ", ".join(listOfCourses)
print(message)