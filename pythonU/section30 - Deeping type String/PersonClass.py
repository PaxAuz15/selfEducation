class Person:
    """
    That's a class Person created by Luis Auz
    """

    def __init__(self,name:str,lastName:str,age:int) -> object:
        """
        To define a Person is necessary:
        - name: Name Person
        - lastName: Last Name Person
        - age: Age Person
        """

        self._name = name
        self._lastName = lastName
        self._age = age
    
    def dataSchoolPerson(self,school:str):
        """
        @school param1: Parameter 1 -> Name of School
        @return to string resume data school
        """

        school = school
        return f"{self._name} {self._lastName} studys on {school}"
