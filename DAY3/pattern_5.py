print("------------Pattern 5---------")
txt = ""
i = 0
for i in range(5):
    for j in range(4-i):
        txt = txt+" "
    for k in range(2*i+1):
        txt = txt+"*"
    for l in range(4-i):
        txt = txt+" "
    print(txt)
    j = 0
    l = 0
    k = 0
    txt = ""
