from UserDao import UserDao
from User import User
from logger_base import log

menu:str="""1) User List\n2) Add User\n3) Update User\n4) Delete User\n5) Exit\nWrite your option: """
choiceUser = None

while choiceUser != 5:
    choiceUser:int = int(input(menu))
    if choiceUser == 1:
        users = UserDao.getAllUsers()
        for user in users:
            log.info(user)
    elif choiceUser == 2:
        username:str = input("What's your username: ")
        password:str = input("What's your password: ")
        user:User = User(username=username,password=password)
        userInserted = UserDao.insertUser(user)
        log.info(f"User inserted: {userInserted}")
    elif choiceUser == 3:
        users = UserDao.getAllUsers()
        for user in users:
            log.info(user)
        idUser:int = int(input("Write id user to update: "))
        username:str = input("What's your username: ")
        password:str = input("What's your password: ")
        user:User = User(idUser,username,password)
        userUpdated = UserDao.updateUser(user)
        log.info(f"User updated: {userUpdated}")
    elif choiceUser == 4:
        users = UserDao.getAllUsers()
        for user in users:
            log.info(user)
        idUser:int = int(input("Write id user to delete: "))
        user:User = User(idUser=idUser)
        userDeleted = UserDao.deleteUser(user)
        log.info(f"User deleted: {userDeleted}")
    else:
        log.info("App Exit")
        continue