print("Input True or False")
vacations = input("Are you on vacation?: ")
restDay = input("Are you on rest day?: ")

if vacations == "True":
    vacations = True
else:
    vacations = False

if restDay == "True":
    restDay = True
else:
    restDay = False

verification:bool = vacations or restDay

if not verification:
    print("You can't go to the game!")
else:
    print("You can go to the game!")