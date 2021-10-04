from Person import Person

class Employee(Person):
    def __init__(self, name: str, lastName: str, age: int, dni: str,salary:float):
        super().__init__(name, lastName, age, dni)
        self._salary = salary
    
    def __str__(self) -> str:
        return f"{super().__str__()} {self._salary}"

employee1:Employee = Employee("Luis","Auz",23,"1315490969",2000)
print(employee1)

