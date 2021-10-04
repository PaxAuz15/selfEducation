class MyClass:
    messageGlobal:str = "Hello World!"

    def __init__(self,valueOne:int or float,valueTwo:int or float) -> int or float:
        self.valueOne:int or float = valueOne
        self.valueTwo:int or float = valueTwo
    
    @staticmethod
    def methodStatic():
        print("This's a method static")
        print(MyClass.messageGlobal)
    
    @classmethod
    def methodClass(cls):
        print(cls.messageGlobal)
        cls.methodStatic()

MyClass.methodClass()
