class Cube:
    def __init__(self,height:float,width:float,depth:float) -> None:
        self.height = height
        self.widht = width
        self.depth = depth
    
    def area(self):
        area_cube:float = self.widht * self.height * self.depth
        return area_cube

height:float = float(input("Input height from cube: "))
width:float = float(input("Input width from cube: "))
depth:float = float(input("Input depth from cube: "))
cube1:Cube = Cube(height,width,depth)
print(cube1.area())