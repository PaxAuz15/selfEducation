class EntryDevice:
    def __init__(self, typeEntry:str, brand:str) -> object:
        self.__typeEntry:str = typeEntry
        self.__brand:str = brand
    
    @property
    def typeEntry(self):
        return self.__typeEntry
    
    @property
    def brand(self):
        return self.__brand
    
    @typeEntry.setter
    def setTypeEntry(self,newTypeEntry:str):
        self.typeEntry = newTypeEntry
        return self.typeEntry
    
    @brand.setter
    def setBrand(self,newBrand:str):
        self.brand = newBrand
        return self.brand

    def __str__(self) -> str:
        return f"Entry Device=[ Entry Type: {self.typeEntry} - Brand: {self.brand} ]"