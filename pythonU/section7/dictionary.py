dictionary:dict = {
    'IDE':'Integrated Development Environment',
    'OOP': 'Object Orientated Programming'
}

print(dictionary)

for valueKey in dictionary:
    print(valueKey)

for valueKey,value in dictionary.items():
    print(value)

for value in dictionary.values():
    print(value)