from GeometricFigure import GeometricFigure as gm
from Color import Color as cl
from Rectangle import Rectangle

class Square(gm,cl):
    def __init__(self, height: float, width: float,color:str):
        #HERENCIA MULTIPLE
        gm.__init__(self,height,width)
        cl.__init__(self,color)
    
    
    def area(self):
        if self.isSquare()==True:
            area:float = self.height * self.width
            return area
        else:
            print("This is not a square")
            Rectangle(self.height,self.width,self.color)
            return Rectangle.area(self)
    
    def isSquare(self):
        if self.height == self.width:
            return True
        else:
            return False
    
    def __str__(self) -> str:
        if self.isSquare()==True:
            return f"{gm.__str__(self)} - {cl.__str__(self)} - Square Area: {self.area()}"
        else:
            return f"{gm.__str__(self)} - {cl.__str__(self)} - Rectangle Area: {self.area()}"
            
