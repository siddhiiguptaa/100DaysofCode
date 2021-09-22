print("------------Pattern 11---------")
txt = ""
i = 0
for j in range(5):
    txt = txt+"*"
print(txt)
for i in range(3):
    j = 0
    txt = ""
    txt = txt+"*"
    for j in range(3-i-1):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    txt = ""
print("*")
