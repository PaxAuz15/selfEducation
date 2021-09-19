class Person:
    def __init__(self,name:str,lastName:str,age:int,dni:str):
        self._name:str = name #_name => el guion bajo es una notacion que indica que no se debe modificar pero sigue siendo modificable
        self.__lastName:str = lastName #notacion que no permite la manipulacion del atributo
        self._age:int = age
        self._dni:str = dni
    
    @property
    def name(self):
        return self._name

    @name.setter
    def setName(self,newName):
        self._name = newName

    @property
    def dni(self):
        return self.dni
    
    @property
    def lastName(self):
        return self.__lastName

    @lastName.setter
    def setLastName(self,newLastName):
        self.__lastName = newLastName
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def setAge(self,newAge):
        self._age = newAge
    
    def showDetail(self):
        print(f"Person details: {self._name} {self.__lastName} tiene {self._age} anios.")

    def __del__(self):
        print("self executed")
        print(f"Person: {self.name} {self.lastName}")
    
    def __str__(self) -> str:
        return f"Person: {self.name} {self.lastName}"