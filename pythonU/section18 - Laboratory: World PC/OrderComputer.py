class OrderComputer:
    
    counterOrdersComputer:int = 0
    computersString:str = ''

    def __init__(self,computers:list) -> object:
        self._id:int = OrderComputer.getIdOrder()
        self._computers:list = computers
    
    @classmethod
    def getIdOrder(cls):
        cls.counterOrdersComputer += 1
        return cls.counterOrdersComputer
    
    @property
    def idOrder(self):
        return self._id

    @property
    def computers(self):
        return self._computers
    
    @computers.setter
    def setComputers(self,newComputer):
        self.computers.append(newComputer)
        return self.computers
    
    def __str__(self) -> str:
        for computer in self.computers:
            self.computersString += computer.__str__()
        
        return f'''
                    Order: {self.idOrder}
                    Computers: {self.computersString}
                '''
    