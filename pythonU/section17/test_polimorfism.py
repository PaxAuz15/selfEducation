from Employeer import Employeer
from Gerent import Gerent

def printDetail(object:object):
    # print(object)
    print(type(object))
    print(object.print_detail())
    if isinstance(object,Gerent):
        print(object.departament)

employeer1:Employeer = Employeer("Luis",2500)
printDetail(employeer1)
gerent1:Gerent = Gerent("Gabriel",3500,"System Area")
printDetail(gerent1)