from GeometricFigure import GeometricFigure as gm
from Color import Color as cl

class Square(gm,cl):
    def __init__(self, height: float, width: float,color:str):
        #HERENCIA MULTIPLE
        gm.__init__(self,height,width)
        cl.__init__(self,color)
    
    
    def area(self):
        area:float = self.height * self.width
        return area
            
    def __str__(self) -> str:
        return f"{gm.__str__(self)} - {cl.__str__(self)} - Square Area: {self.area()}"
            
