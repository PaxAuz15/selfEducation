class Rectangle:
    def __init__(self,base,height):
        self.base:float = base
        self.height:float = height
    
    def area(self):
        area:float = self.base * self.height
        return area

rectangle1:Rectangle = Rectangle(4,3)
print(rectangle1.area())