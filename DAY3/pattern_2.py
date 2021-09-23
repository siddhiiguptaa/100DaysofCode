print("------------Pattern 2---------")
txt = ""
i = 0
for i in range(5):
    j = 0
    #create star pattern for one line
    for j in range(5-i):
        txt = txt+"*"
    #print the created pattern
    print(txt)
    #clear variable for next iteration.
    txt = ""
