"""
hackerRank technical interview question
level: medium
     *
     * 
******
"""

def stairsPattern(num):
    # required for a step of the stair
    height = ((num * 3) + 1)
    width = (num * 6)

    # for a single step 
    for i in range(height, 0, -1):
        for j in range(i):
            print ("*", end=" ")
        print()

stairsPattern(1)