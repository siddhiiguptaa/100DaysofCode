print("------------Pattern 12---------")
txt = ""
i = 0
for j in range(5):
    txt = txt+"*"
print(txt)
i = 0
for i in range(3):
    j = 0
    txt = ""
    for l in range(i):
        txt = txt+" "
    txt = txt+"*"
    for j in range(3-i):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    txt = ""
j = 0
txt = ""
for j in range(4):
    txt = txt+" "
print(txt+"*")
