"""
hackerRank technical interview question
level: medium
     *
     * 
******
"""


def singleStairsPattern(num):
    # required for a step of the stair
    height = (num * 6)
    width = (num * 6)

    # for a single step
    for i in range(height - 1, height - 2, -1):

        for j1 in range(i):
            print(" ", end=" ")
        print("*", end="")
        print()

        for j2 in range(i):
            print(" ", end=" ")
        print("*", end="")
        print()

        for j4 in range(6, 0, -1):
            print("*", end=" ")
        print()


singleStairsPattern(1)

# stairsPattern(1)
