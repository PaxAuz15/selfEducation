from decimal import Decimal
import decimal
import math

# NaN with float
notANumber:float = float("NaN")
print(notANumber)
print(type(notANumber))
print(f"Is a NaN: {math.isnan(notANumber)}")

# NaN with Decimal
notANumber:decimal = Decimal("NaN")
print(notANumber)
print(type(notANumber))
print(f"Is a NaN? {math.isnan(notANumber)}")