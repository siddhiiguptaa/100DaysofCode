print("------------Pattern 10---------")
txt = ""
i = 0
print("*")
for i in range(3):
    txt = txt+"*"
    for l in range(i):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    txt = ""
txt = ""
for j in range(5):
    txt = txt+"*"
print(txt)
