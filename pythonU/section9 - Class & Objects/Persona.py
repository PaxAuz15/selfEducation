from typing import AsyncGenerator


class Persona:
    def __init__(self,name:str,lastName:str,age:int,*phones:tuple,**education:dict) -> None:
        self.name:str = name
        self.lastName:str = lastName
        self.age:int = age
        self.phones:tuple = phones
        self.education:dict = education
    
    def showDetail(self):
        print(f"Person details: {self.name} {self.lastName} tiene {self.age} anios. {self.phones} - {self.education}")

person1:Persona = Persona('Luis','Auz',23,'123456789','456123897',primary=True,seondary=True,college=False)

person1.showDetail()