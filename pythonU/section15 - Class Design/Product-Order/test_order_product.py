from Product import Product
from Order import Order

product1:Product = Product("Laptop",1250.45)
product2:Product = Product("Mouse",10)
order1:Order = Order([product1,product2])
print(order1)