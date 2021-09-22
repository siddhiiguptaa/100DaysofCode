print("------------Pattern 17---------")
txt = ""
i = 0
for j in range(4):
    txt = txt+" "
print(txt+"*")
txt = ""
j = 0
for i in range(3):
    for j in range(3-i):
        txt = txt+" "
    txt = txt+"*"
    for j in range(i):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    j = 0
    k = 0
    txt = ""
for i in range(4):
    for j in range(i):
        txt = txt+" "
    txt = txt+"*"
    for j in range(3-i):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    j = 0
    k = 0
    txt = ""
for j in range(4):
    txt = txt+" "
print(txt+"*")
