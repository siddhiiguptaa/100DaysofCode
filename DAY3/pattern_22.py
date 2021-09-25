print("------------Pattern 22---------")


def pyramid(row):
    for i in range(row):
        for j in range(0, row-i):
            print(" ", end=" ")
        for k in range(0, i+1):
            print("*", end=" ")
        for l in range(k):
            print("*", end=" ")

        print()

# pyramid(5)


def reversePyramid(row):
    for i in range(row):
        for j in range(i+1):
            print("*", end=" ")
        for k in range(row, 0, -1):
            print(" ", end=" ")
        print()

    for i in range(row-1, 0, -1):
        for j in range(i):
            print("*", end=" ")
        print()

reversePyramid(5)

print()
