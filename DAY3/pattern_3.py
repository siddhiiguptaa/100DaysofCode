print("------------Pattern 3---------")
txt = ""
i = 0
for i in range(5):
    j = 0
    for j in range(5-i-1):
        txt = txt+" "
    for k in range(i+1):
        txt = txt+"*"
    print(txt)
    txt = ""
