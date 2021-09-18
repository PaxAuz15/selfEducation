from Persona import Persona

print("Object creation".center(50,'-'))
testPersona:Persona = Persona('Gabriel','Auz',19,'1315490979')
print(testPersona.showDetail())
print("Object deleted".center(50,'-'))
del testPersona