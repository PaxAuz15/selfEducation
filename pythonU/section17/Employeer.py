class Employeer:
    def __init__(self,name:str,salary:float) -> object:
        self._name:str = name
        self._salary:float = salary
    
    @property
    def name(self):
        return self._name
    
    @property
    def salary(self):
        return self._salary
    
    def __str__(self) -> str:
        return f"Employeer [name: {self.name}, salary: {self.salary}]"
    
    def print_detail(self) -> str:
        return self.__str__()