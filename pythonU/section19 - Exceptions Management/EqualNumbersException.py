class EqualNumbersException(Exception):

    def __init__(self, message:str) -> object:
        self.message = message