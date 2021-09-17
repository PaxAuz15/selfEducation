bookName:str = input("Input book name: ")
bookId:int = int(input("Input book id: "))
bookPrice:float = float(input("Input boook price: "))
bookSentFree:str = input("Is free sent? (True or False): ")

if bookSentFree == "True":
    bookSentFree = True
else:
    bookSentFree = False

# print(f"Name: {bookName}")
# print(f"Id: {bookId}")
# print(f"Price: {bookPrice}")
# print(f"Sent free: {bookSentFree}")

print(f'''
Name: {bookName},
Id: {bookId},
Price: {bookPrice},
Sent Free: {bookSentFree}
''')