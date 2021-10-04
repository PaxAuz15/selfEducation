class Color:
    def __init__(self,color:str):
        self._color:str = color

    @property
    def color(self):
        return self._color
    
    @color.setter
    def setColor(self,newColor):
        self._color = newColor
    
    def __str__(self) -> str:
        return f"Color: {self.color}"