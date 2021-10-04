from logger_base import log

class Person:
    def __init__(self, idPersona=None, name:str=None, lastName:str=None, email:str=None) -> object:
        self._idPersona = idPersona,    
        self._name:str = name,
        self._lastName:str = lastName,
        self._email:str = email
    
    def __str__(self) -> str:
        message:str=f"""idPerson: {self.idPerson}\nName:{self.name}\nLast Name: {self.lastName}\nEmail: {self.email}"""
        return message
    
    @property
    def idPerson(self):
        return self._idPersona
    
    @property
    def name(self):
        return self._name
    
    @property
    def lastName(self):
        return self._lastName
    
    @property
    def email(self):
        return self._email
    
    @idPerson.setter
    def setIdPerson(self,newIdPerson):
        self._idPersona = newIdPerson
    
    @name.setter
    def setName(self, newName:str):
        self._name = newName
    
    @lastName.setter
    def setLastName(self, newLastName:str):
        self._lastName = newLastName
    
    @email.setter
    def setEmail(self, newEmail:str):
        self._email = newEmail

if __name__ == "__main__":
    person1:Person = Person(1,"Luis","Auz","luisauz@mail.com")
    log.debug(person1)