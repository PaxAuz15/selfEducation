class Monitor:
    
    counterMonitor:int = 0

    def __init__(self, brand:str, size:str) -> object:
        self._id:int = Monitor.getIdMonitor()
        self._brand:str = brand
        self._size:str = size

    @classmethod
    def getIdMonitor(cls):
        cls.counterMonitor += 1
        return cls.counterMonitor
    
    @property
    def brand(self):
        return self._brand
    
    @property
    def size(self):
        return self._size
    
    @brand.setter
    def setBrandMonitor(self,newBrand):
        self.brand = newBrand
        return self.brand
    
    @size.setter
    def setSizeMonitor(self,newSize):
        self.size = newSize
        return self.size
    
    def __str__(self) -> str:
        return f"Monitor=[ Brand:{self.brand}] - Size:{self.size}"