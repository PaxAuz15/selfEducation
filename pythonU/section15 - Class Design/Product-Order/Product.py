class Product:

    counterProduct:int = 0

    def __init__(self,name:str,price:float) -> object:
        self._id:int = Product.getIdProduct()
        self._name:str = name
        self._price:float = price

    @classmethod
    def getIdProduct(cls):
        cls.counterProduct += 1
        return cls.counterProduct
    
    @property
    def idProduct(self):
        return self._id
    
    @property
    def nameProduct(self):
        return self._name
    
    @property
    def priceProduct(self):
        return self._price
    
    @nameProduct.setter
    def setProductName(self,newName:str):
        self._name = newName
        return self._name
    
    @priceProduct.setter
    def setProductPrice(self,newPrice:float):
        self._price = newPrice
        return self._price

    def __str__(self) -> str:
        return f"ID Product: {self.idProduct} - Name Product: {self.nameProduct} - Price Product: {self.priceProduct}"
    

if __name__ == "__main__":
    product1:Product = Product("Ropa",45.50)
    print(product1)
        