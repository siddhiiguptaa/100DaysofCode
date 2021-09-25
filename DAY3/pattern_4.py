print("------------Pattern 4---------")
txt = ""
i = 0
for i in range(5):
    j = 0
    for k in range(i):
        txt = txt+" "
    for j in range(5-i):
        txt = txt+"*"

    print(txt)
    txt = ""
