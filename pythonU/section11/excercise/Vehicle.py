class Vehicle:
    def __init__(self,color:str,wheels:int) -> None:
        self._color:str = color
        self._wheels:int = wheels
    
    def __str__(self) -> str:
        return f"Vehicle: [Color: {self._color}, Wheels: {self._wheels}"