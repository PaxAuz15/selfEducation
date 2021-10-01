from UserDao import UserDao
from User import User

menu:str="""1) User List\n2) Add User\n3) Update User\n4) Delete User\n5) Exit\nWrite your option: """
choiceUser = None

while choiceUser != 5:
    choiceUser:int = int(input(menu))
    if choiceUser == 1:
        UserDao.getAllUsers()
    elif choiceUser == 2:
        username:str = input("What's your username: ")
        password:str = input("What's your password: ")
        user:User = User(username=username,password=password)
        UserDao.insertUser(user)
    elif choiceUser == 3:
        UserDao.getAllUsers()
        idUser:int = int(input("Write id user to update: "))
        username:str = input("What's your username: ")
        password:str = input("What's your password: ")
        user:User = User(idUser,username,password)
        UserDao.updateUser(user)
    elif choiceUser == 4:
        UserDao.getAllUsers()
        idUser:int = int(input("Write id user to delete: "))
        user:User = User(idUser=idUser)
        UserDao.deleteUser(user)
    else:
        continue