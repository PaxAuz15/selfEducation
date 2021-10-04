from Computer import Computer
from OrderComputer import OrderComputer

# computer1:Computer = Computer(name='Lenovo',monitor=Monitor("Lenovo","21'"),keyboard=Keyboard("Cable","Logitech"),mouse=Mouse("Bluetoth","Genius"))
computer1:Computer = Computer("Lenovo PC",["Lenovo","21'"],["Cable","Logitech"],["Bluetooth","Genius"])
computer2:Computer = Computer("DELL PC",["Lenovo","24'"],["Cable","Razers"],["Bluetooth","Genius"])
listComputers:list = [computer1,computer2]
order1:OrderComputer = OrderComputer(listComputers)
print(order1)