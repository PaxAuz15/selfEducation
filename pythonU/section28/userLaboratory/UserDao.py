from typing import List
from logger_base import log
from CursorPool import CursorPool
from User import User

class UserDao:
    _SELECT:str = "SELECT * FROM public.user"
    _INSERT:str = "INSERT INTO public.user(username,password) VALUES(%s,%s)"
    _UPDATE:str = "UPDATE public.user SET username=%s,password=%s WHERE id_user=%s"
    _DELETE:str = "DELETE FROM public.user WHERE id_user=%s"

    @classmethod
    def getAllUsers(cls):
        try:
            with CursorPool() as cursor:
                users = []
                cursor.execute(cls._SELECT)
                registers = cursor.fetchall()
                for register in registers:
                    user:User = User(
                        idUser=register[0],
                        username=register[1],
                        password=register[2]
                        )
                    users.append(user)
                    log.debug(user)
                log.debug("Getting Users succesfully")
                return users
        except Exception as e:
            log.error(f"Error happened while getting all users: {e}")
    
    @classmethod
    def insertUser(cls,user:User):
        try:
            with CursorPool() as cursor:
                values:tuple = (user.username,user.password)
                cursor.execute(cls._INSERT,values)
                log.debug(f"User registred: {user}")
                return cursor.rowcount

        except Exception as e:
            log.error(f"Error happened while insert user: {e}")
    
    @classmethod
    def updateUser(cls,user:User):
        try:
            with CursorPool() as cursor:
                values:tuple = (user.username,user.password,user.idUser)
                cursor.execute(cls._UPDATE,values)
                log.debug(f"User updated: {user}")
                return cursor.rowcount
        except Exception as e:
            log.error(f"Error happened while updating user: {e}")
    
    @classmethod
    def deleteUser(cls,user:User):
        try:
            with CursorPool() as cursor:
                value:tuple = (user.idUser,)
                cursor.execute(cls._DELETE,value)
                log.debug(f"User deleted: {user}")
                return cursor.rowcount
        except Exception as e:
            log.error(f"Error happened while delete user: {e}")

if __name__ == "__main__":
    # user1:User = User(username="tatogabo",password="12345")
    # UserDao.insertUser(user1)

    # user1:User = User(idUser=2)
    # UserDao.deleteUser(user1)

    # user1:User = User(1,"paxauz20","54321")
    # UserDao.updateUser(user1)
    users = UserDao.getAllUsers()
    for user in users:
        log.debug(user)