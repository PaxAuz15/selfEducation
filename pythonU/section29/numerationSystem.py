#Numeration System

# DECIMAL
decimal = 10

# BINARIO
binary = 0b1010

# OCTAL 
octal = 0o12

# HEXADECIMAL
hexadecimal = 0xA

print(f"Type: {type(decimal)} || Value: {decimal}")
print(f"Type: {type(binary)} || Value: {binary}")
print(f"Type: {type(octal)} || Value: {octal}")
print(f"Type: {type(hexadecimal)} || Value: {hexadecimal}")

# Hacer conversiones entre bases distintas
base_decimal = int("10",10)
print(f"Type: {type(base_decimal)} || Value: {base_decimal}")

base_binary = int("10",2)
print(f"Type: {type(base_binary)} || Value: {base_binary}")

base_octal = int("10",8)
print(f"Type: {type(base_octal)} || Value: {base_octal}")

base_hexadecimal = int("10",16)
print(f"Type: {type(base_hexadecimal)} || Value: {base_hexadecimal}")
