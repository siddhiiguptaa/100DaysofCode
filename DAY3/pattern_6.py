print("------------Pattern 6---------")
txt = ""
i = 0
for i in range(5):
    for j in range(i):
        txt = txt+" "
    for k in range(9-2*i):
        txt = txt+"*"
    print(txt)
    j = 0
    k = 0
    txt = ""
