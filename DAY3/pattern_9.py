print("------------Pattern 9---------")
txt = ""
i = 0
for j in range(5):
    txt = txt+" "
print(txt+"*")
for i in range(3):
    j = 0
    txt = ""
    for j in range(5-i-1):
        txt = txt+" "
    txt = txt+"*"
    for l in range(i):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    txt = ""
j = 0
txt = " "
for j in range(5):
    txt = txt+"*"
print(txt)
