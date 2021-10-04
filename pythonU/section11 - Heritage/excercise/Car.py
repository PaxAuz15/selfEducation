from Vehicle import Vehicle

class Car(Vehicle):
    def __init__(self, color: str, wheels: int,velocity:float):
        super().__init__(color, wheels)
        self._velocity:float = velocity
    
    def __str__(self) -> str:
        return f"{super().__str__()} Car: [Velocity: {self._velocity}]"