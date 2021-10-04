class FileHandler:
    def __init__(self,name) -> object:
        self._name = name
    
    def __enter__(self):
        print("Opening File".center(50,"-"))
        self._name = open(self._name,"r",encoding="utf8")
        return self._name

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self._name:
            self._name.close()
            print("Closing File".center(50,"-"))