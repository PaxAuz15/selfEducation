#READ ABOUT THAT: https://medium.com/@LuisMBaezCo/overloading-sobrecargar-operadores-en-python-5d7a75e2bfdf
class TestingOperatorOverload:
    def __init__(self,name:str,age:int) -> object:
        self._name:str = name
        self._age:int = age
    
    @property
    def name(self):
        return self._name
    
    @property
    def age(self):
        return self._age

    def __repr__(self) -> str:
        name:str = self.name
        age:int = self.age
        return f"I'm {name} and I've {age} years old."
    
    def __str__(self) -> str:
        return f"Person=[ name: {self.name}, age: {self.age} ]"
    
    def __add__(self,other):
        return f"{self.name}-{other.name}"
    
    def __sub__(self,other):
        return self.age - other.age

if __name__ == "__main__":
    test1:TestingOperatorOverload = TestingOperatorOverload("Luis", 23)
    test2:TestingOperatorOverload = TestingOperatorOverload("Antonio", 23)
    reprTest1:str = repr(test1)
    print(reprTest1)
    print(test1)
    print(test1+test2)
    print(test1-test2)