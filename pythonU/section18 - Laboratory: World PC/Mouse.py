from EntryDevice import EntryDevice

class Mouse(EntryDevice):

    counterMouse:int = 0

    def __init__(self, typeEntry: str, brand: str) -> object:
        super().__init__(typeEntry, brand)
        self._id:int = Mouse.getIdMouse()
    
    @classmethod
    def getIdMouse(cls):
        cls.counterMouse += 1
        return cls.counterMouse
    @property
    def idMouse(self):
        return self._id

    def __str__(self) -> str:
        return f"Mouse=[ id: {self.idMouse} ] || {super().__str__()}"


if __name__ == "__main__":
    mouse1:Mouse = Mouse("Cable","Genius")
    mouse2:Mouse = Mouse("Bluetooth","Lenovo")
    print(mouse1)
    print(mouse2)