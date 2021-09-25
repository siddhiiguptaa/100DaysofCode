# printing letter L
height = 5
width = (2 * height) - 1

def printL():
    print("------------Pattern 21---------")
    for i in range(0, height):
        print("*", end="")
        for j in range(0, height+1):
                if (i == height - 1):
                    print("*", end="")
                else:
                    print(end=" ")
        print()

print(printL())
