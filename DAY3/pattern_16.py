print("------------Pattern 16---------")
txt = ""
i = 0
print(txt+"*")
txt = ""
j = 0
for i in range(3):
    txt = txt+"*"
    for k in range(i):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    j = 0
    k = 0
    txt = ""
for i in range(4):

    txt = txt+"*"
    for k in range(3-i):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    j = 0
    k = 0
    txt = ""
print(txt+"*")
