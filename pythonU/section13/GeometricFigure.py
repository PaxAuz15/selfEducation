from abc import ABC,abstractmethod
class GeometricFigure(ABC):
    def __init__(self,height:float,width:float) -> None:
        self._height:float = height
        self._width:float = width
    
    @property
    def height(self):
        return self._height
    
    @height.setter
    def setHeight(self,newHeight):
        self._height = newHeight
    
    @property
    def width(self):
        return self._width
    
    @width.setter
    def setWidth(self,newWidth):
        self._width = newWidth
    
    @abstractmethod
    def area(self):
        pass
    
    def __str__(self) -> str:
        return f"Geometric Figure: [Width: {self.width}, Height: {self.height}]"