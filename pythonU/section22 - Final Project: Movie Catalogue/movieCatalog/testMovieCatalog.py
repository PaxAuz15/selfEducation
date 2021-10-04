from os import name
from domain.Movie import Movie
from service.MovieCatalog import MovieCatalog

choice = None

while choice != 4:
    try:
        choice:int=int(input("""1) Add Movie\n2) List Movies\n3) Delete movie files\n4) Exit\nWhat's your choice?: """))
    except Exception as e:
        print("You should to choice a number of list before")
        choice = None
    finally:
        if type(choice) == int:
            if choice == 1:
                movieName:str = input("Enter movie's name: ")
                movie:str = Movie(movieName)
                try:
                    MovieCatalog.movieAdd(movie.name)
                except Exception as e:
                    print(f"Error happened: {e}")
            elif choice == 2:
                try:
                    MovieCatalog.movieList()
                except Exception as e:
                    print(f"Error happened: {e}")
            elif choice == 3:
                try:
                    MovieCatalog.movieDel()
                except:
                    print(f"Error happened: {e}")
            elif choice == 4:
                try:
                    quit()
                except Exception as e:
                    print(f"Error happened: {e}")
        else:
            quit()

