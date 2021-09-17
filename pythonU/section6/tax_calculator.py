def tax_calculator(subtotal:float=0,tax:float=0):
    tax_to_pay:float = (subtotal * tax)/100
    total:float = subtotal + tax_to_pay
    return total

subtotal:float = float(input("Input your subtotal: "))
tax_porcentage:float = float(input("Input tax porcentage: "))
print(tax_calculator(subtotal,tax_porcentage))