class Arithmetic:
    """
        Arithmetic class to make operations like sum, rest, multiplication, divition
    """

    def __init__(self,numberOne:float,numberTwo:float) -> None:
        self.numberOne:float = numberOne
        self.numberTwo:float = numberTwo
    
    def addition(self):
        return self.numberOne + self.numberTwo
    
    def multiplication(self):
        return self.numberOne * self.numberTwo
    
    def rest(self):
        return self.numberOne - self.numberTwo
    
    def divition(self):
        return self.numberOne / self.numberTwo

numbersToOperate:Arithmetic = Arithmetic(4,5)

print(numbersToOperate.addition())