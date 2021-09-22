from Employeer import Employeer

class Gerent(Employeer):
    def __init__(self, name: str, salary: float,departament:str) -> object:
        super().__init__(name, salary)
        self._departament:str = departament
    
    @property
    def departament(self):
        return self._departament
    
    def __str__(self) -> str:
        # return super().__str__()
        return f"Gerent: [ departament: {self.departament} ] - {super().__str__()}"