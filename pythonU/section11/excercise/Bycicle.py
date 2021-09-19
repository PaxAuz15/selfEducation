from Vehicle import Vehicle

class Bycicle(Vehicle):
    def __init__(self, color: str, wheels: int,type:str):
        super().__init__(color, wheels)
        self._type:str = type

    def __str__(self) -> str:
        return f"{super().__str__()} Bycicle: [Type: {self._type}]"