

# Complete the staircase function below.
def staircase(row):
    # height = row * 3
    # width = row * 6
    for star in range(row, -1, -1):
        for space in range(row):
            print('#' * (star * 5) + '*' * star)
            print('#' * (star * 5) + '*' * star)
            print('#' * (space * row), end="")
            print('*' * 6)


if __name__ == '__main__':
    # row = int(input())
    staircase(2)
