def celsius_fahrenheit(grade_celcius:float):
    grade_fahrenheit:float = (grade_celcius*9)/5 + 32
    return grade_fahrenheit

def fahrenheit_celsius(grade_fahrenheit:float):
    grade_celcius:float = (grade_fahrenheit-32)*(5/9)
    return grade_celcius

celsius:float = float(input("Input celsius grade: "))
fahrenheit:float = float(input("Input fahrenheit grade: "))

print(celsius_fahrenheit(celsius))
print(fahrenheit_celsius(fahrenheit))