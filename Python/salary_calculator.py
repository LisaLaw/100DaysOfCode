hrs = input("Enter Hours:")
h = float(hrs)
rph = input("Enter Rate per Hour:")
r = float(rph)
#pay = float(hrs) * float(rph)
pay = 0
if h > 40 :
	extrapay = h - 40
	pay = 40 * r + extrapay * r * 1.5
else:
	pay = h * r
print(pay)
