score = input("Enter Score: ")
intscore = float(score)
if intscore < 0.0 :
	print("Error")
elif intscore > 1.0 :
	print("Error")
elif intscore >= 0.9 :
	print("A")
elif intscore >= 0.8 :
	print("B")
elif intscore >= 0.7 :
	print("C")
elif intscore >= 0.6 :
	print("D")
elif intscore < 0.6 :
	print("F")