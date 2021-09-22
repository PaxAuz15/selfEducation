from Monitor import Monitor
from Keyboard import Keyboard
from Mouse import Mouse

class Computer():
    
    counterComputer:int = 0

    def __init__(self,name:str,monitor:list,keyboard:list,mouse:list) -> object:
        self._id:int = Computer.getIdComputer()
        self._name:str = name
        self._monitor:Monitor = Monitor(monitor[0],monitor[1])
        self._keyboard:Keyboard = Keyboard(keyboard[0],keyboard[1])
        self._mouse:Mouse = Mouse(mouse[0],mouse[1])
    
    @classmethod
    def getIdComputer(cls):
        cls.counterComputer += 1
        return cls.counterComputer
    
    @property
    def idComputer(self):
        return self._id
    
    @property
    def nameComputer(self):
        return self._name
    
    @nameComputer.setter
    def setNameComputer(self,newName:str):
        self.nameComputer = newName
        return self.nameComputer
    
    @property
    def monitor(self):
        return self._monitor
    
    @monitor.setter
    def setMonitorComputer(self,newMonitor:Monitor):
        self.monitor = newMonitor
        return self.monitor
    
    @property
    def keyboard(self):
        return self._keyboard
    
    @keyboard.setter
    def setKeyboardComputer(self,newKeyboard:Keyboard):
        self.keyboard = newKeyboard
        return self.keyboard
    
    @property
    def mouse(self):
        return self._mouse
    
    @mouse.setter
    def setMouseComputer(self,newMouse:Mouse):
        self.mouse = newMouse
        return self.mouse
    
    def __str__(self) -> str:
        return f"Computer: [id: {self.idComputer}]\n[name: {self.nameComputer}]\n[keyboard: {self.keyboard}] \n[mouse: {self.mouse}] \n [monitor: {self.monitor}]"