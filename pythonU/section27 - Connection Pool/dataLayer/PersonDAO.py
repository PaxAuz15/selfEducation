from Person import Person
from Connection import Connection
from logger_base import log
from CursorPool import CursorPool

class PersonDAO:
    """
    DAO => Data Access Object
    CRUD => Create, Read, Update, Delete
    """
    
    _SELECT:str="SELECT * FROM person ORDER BY id_person"
    _INSERT:str="INSERT INTO person(name,last_name,email) VALUES(%s,%s,%s)"
    _UPDATE:str="UPDATE person SET name=%s,last_name=%s,email=%s WHERE id_person=%s"
    _DELETE:str="DELETE FROM person WHERE id_person=%s"

    @classmethod
    def getAllPersons(cls):
        with CursorPool() as cursor:
            cursor.execute(cls._SELECT)
            records = cursor.fetchall()
            persons = []
            for record in records:
                person:Person = Person(record[0],record[1],record[2],record[3])
                log.debug(person)
            return persons

    @classmethod
    def insertPerson(cls,person:Person):
        with CursorPool() as cursor:
            values = (person.name,person.lastName,person.email)
            cursor.execute(cls._INSERT,values)
            log.debug(f"Person Insert on db: {person}")
            return cursor.rowcount
    
    @classmethod
    def updatePerson(cls,person:Person):
        with CursorPool() as cursor:
            values = (person.name,person.lastName,person.email,person.idPerson)
            cursor.execute(cls._UPDATE,values)
            log.debug(f"Person updated on db: {person}")
            return cursor.rowcount
    
    @classmethod
    def deletePerson(cls,person:Person):
        with CursorPool() as cursor:
            values = (person.idPerson,)
            cursor.execute(cls._DELETE,values)
            log.debug(f"Person deleted on db: {person}")
            return cursor.rowcount

if __name__ == "__main__":
    # INSERT PERSON
    # person1:Person = Person(name="Alejandro",lastName="Bello",email="abello@mail.com")
    # PersonDAO.insertPerson(person1)

    # UPDATE PERSON
    # person1:Person = Person(8,"Alejandrito","Bello","albello@mail.com")
    # PersonDAO.updatePerson(person1)

    # DELETE PERSON
    # person1:Person = Person(idPersona=8)
    # PersonDAO.deletePerson(person1)

    PersonDAO.getAllPersons()