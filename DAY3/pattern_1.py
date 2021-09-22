print("------------Pattern 1---------")
txt=""
for i in range(6):
    j=0
    #create star pattern for one line
    for j in range(i):
        txt=txt+"*"
    #print the created pattern    
    print(txt)
    #clear variable for next iteration.
    txt=""