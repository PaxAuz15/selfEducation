class Person:
    personCounter:int = 0

    @classmethod
    def generateId(cls):
        cls.personCounter += 1
        return cls.personCounter

    def __init__(self,name:str,age:int):
        self.id:int = Person.generateId()
        self.name:str = name
        self.age:int = age
    
    def __str__(self) -> str:
        return f"Person: [id: {self.id} - name:{self.name} - age:{self.age}"
    
    @classmethod
    def getCounter(cls):
        return cls.personCounter

person1:Person = Person("Luis",23)
person2:Person = Person("Gabriel",19)
print(person1)
print(person2) 
print(Person.getCounter())