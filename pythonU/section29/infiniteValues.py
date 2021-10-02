import decimal
import math
from decimal import Decimal

# Infinite numbers with float
infinitePositive:float = float("inf")
print(infinitePositive)
print(f"Is infinite? {math.isinf(infinitePositive)}")
print(type(infinitePositive))

infiniteNegative:float = float("-inf")
print(infiniteNegative)
print(f"Is infinite? {math.isinf(infiniteNegative)}")
print(type(infiniteNegative))

# Infintie with math module
infinitePositive:math = math.inf
print(infinitePositive)
print(f"Is infinite? {math.isinf(infinitePositive)}")
print(type(infinitePositive))

result = infinitePositive - infiniteNegative
print(f"Result is {result}")

infiniteNegative:math = -math.inf
print(infiniteNegative)
print(f"Is infinite? {math.isinf(infiniteNegative)}")
print(type(infiniteNegative))

# infinite with decimal module
infinitePositive:decimal = Decimal("Infinity")
print(infinitePositive)
print(f"Is infinite? {math.isinf(infinitePositive)}")
print(type(infinitePositive))

infiniteNegative:decimal = Decimal("-Infinity")
print(infiniteNegative)
print(f"Is infinite? {math.isinf(infiniteNegative)}")
print(type(infiniteNegative))

result = infinitePositive - infiniteNegative
print(result)

# NOTE: Can't operate (sum,rest,mult,div, etc) Infinity type with float type
