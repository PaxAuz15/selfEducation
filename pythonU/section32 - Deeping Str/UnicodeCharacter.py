spaceUnicode:str = "Hello\u0020World"
print(spaceUnicode)

print(f"Normal extension: \u0041")
print(f"Major extension: \U00000041")
print(f"Hexadecimal extension (Only works with characters on two last numbers: \x41")

print("Heart: \u2665")
print("Smile: \U0001F600")