from Square import Square
from Rectangle import Rectangle

square1:Square = Square(4,5,"green")
rectangle1:Rectangle = Rectangle(4,4,"red")
# print(square1.area())
print(square1)
print(rectangle1)
print(Square.mro())
# print(Square.mro()) #Conocer el orden de llamada de clases hijas a padres