from Product import Product

class Order:
    counterOrder:int = 0
    total:float = 0
    products:str = ''

    def __init__(self,listProducts:list) -> object:
        self._id:int = Order.getIdOrder()
        self._listProducts:list = list(listProducts)

    @classmethod
    def getIdOrder(cls):
        cls.counterOrder += 1
        return cls.counterOrder
    
    @property
    def OrderId(self):
        return self._id
    
    @property
    def OrderListProducts(self):
        return self._listProducts
    
    @OrderListProducts.setter
    def setListProducts(self,newListProducts:list):
        self._listProducts = newListProducts
        return self._listProducts
    
    def addProduct(self,newProduct:str):
        self.OrderListProducts.append(newProduct)
        return self.OrderListProducts
    
    def getOrderTotal(self):
        for product in self.OrderListProducts:
            self.total += product.priceProduct
        return self.total
    
    def __str__(self) -> str:
        for product in self.OrderListProducts:
            if len(self.OrderListProducts) == 1:
                self.products += product
            else:
                self.products += product.__str__()+', '
        return f"Orden: {self.OrderId}\nProducts[{self.products}]"

if __name__ == "__main__":
    product1:Product = Product("Ropa",45.50)
    product2:Product = Product("Comida",35.75)
    order1:Order = Order([product1,product2])
    print(order1.getOrderTotal())
    order2:Order = Order([product1])
    print(order1)
    print(order2)
