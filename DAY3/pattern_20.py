print("------------Pattern 20---------")
txt = ""
i = 0
j = 0

for i in range(5):
    for j in range(i):
        txt = txt+" "
    txt = txt+"*"
    for k in range(4-i):
        txt = txt+" "
    txt = txt+"*"
    for l in range(4-i):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    txt = ""
i = 0
for i in range(11):
    txt = txt+"*"
print(txt)
txt = ""
i = 0
txt = ""
i = 0
j = 0

for i in range(5):
    for j in range(4-i):
        txt = txt+" "
    txt = txt+"*"
    for k in range(i):
        txt = txt+" "
    txt = txt+"*"
    for l in range(i):
        txt = txt+" "
    txt = txt+"*"
    print(txt)
    txt = ""
