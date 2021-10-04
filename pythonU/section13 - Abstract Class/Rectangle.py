from GeometricFigure import GeometricFigure
from Color import Color

class Rectangle(GeometricFigure,Color):
    def __init__(self, height: float, width: float, color:str) -> None:
        GeometricFigure.__init__(self,height,width)
        Color.__init__(self,color)

    def area(self):
        area:float = self.height * self.width
        return area
    
    def __str__(self) -> str:
        return f"{GeometricFigure.__str__(self)} - {Color.__str__(self)} - Rectangle Area: {self.area()}"