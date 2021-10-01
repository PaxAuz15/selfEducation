class User:
    def __init__(self, idUser=None, username=None, password=None) -> object:
        self._idUser = idUser
        self._username = username
        self._password = password
    
    @property
    def idUser(self):
        return self._idUser
    
    @idUser.setter
    def setIdUser(self,newIdUser):
        self._idUser = newIdUser
    
    @property
    def username(self):
        return self._username
    
    @username.setter
    def setUsername(self,newUsername):
        self._username = newUsername
    
    @property
    def password(self):
        return self._password

    @password.setter
    def setPassword(self,newPassword):
        self._password = newPassword
    
    def __str__(self) -> str:
        message:str = f"""idUser: {self.idUser}\nusername: {self.username}\npassword: {self.password}"""
        return message