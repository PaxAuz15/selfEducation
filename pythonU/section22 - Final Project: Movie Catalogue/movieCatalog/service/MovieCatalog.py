import os

ROUTEFILE:str = '/home/paxauz/dev/selfEducation/pythonU/section22/'

class MovieCatalog:

    file:str = f"{ROUTEFILE}catalog_movie.txt"

    def __init__(self) -> None:
        self.file = MovieCatalog.fileName

    @classmethod
    def movieAdd(cls,movie):
        with open(cls.file,"a",encoding="utf8") as movieList:
            if cls.isEmpty() == 1:
                return movieList.write(f"{str(movie)}")
            else:
                return movieList.write(f"\n{str(movie)}")
    
    @classmethod
    def movieList(cls):
        with open(cls.file,"r",encoding="utf8") as movieList:
            print("Movies List".center(50,"-"))
            return print(movieList.read())
    
    @classmethod
    def movieDel(cls):
        return os.remove(cls.file)
    
    @classmethod
    def isEmpty(cls):
        fileSize = os.path.getsize(cls.file)
        if fileSize == 0:
            return 1
        else:
            return 0