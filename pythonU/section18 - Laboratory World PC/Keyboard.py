from EntryDevice import EntryDevice

class Keyboard(EntryDevice):

    counterKeyboard:int = 0

    def __init__(self, typeEntry: str, brand: str) -> object:
        super().__init__(typeEntry, brand)
        self._id:int = Keyboard.getIdKeyboard()    

    @classmethod
    def getIdKeyboard(cls):
        cls.counterKeyboard += 1
        return cls.counterKeyboard

    @property
    def idKeyboard(self):
        return self._id
    
    def __str__(self) -> str:
        # return super().__str__()
        return f"Keyboard:[ id: {self.idKeyboard}] - {super().__str__()}"