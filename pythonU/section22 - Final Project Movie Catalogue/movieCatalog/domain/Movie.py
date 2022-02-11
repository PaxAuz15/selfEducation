class Movie:
    def __init__(self,name:str) -> object:
        self._name:str = name
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def setName(self,newName):
        self.name = newName
        return self.name
    
    def __str__(self) -> str:
        return f"Movie: {self.name}"