from typing import List


def CalculateElevation(nums: List[int]) -> int:
    total = 1

    for n in range(len(nums)):
        num = nums[n] - 1
        if (num > 0):
            total += num

    return total


data = CalculateElevation([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
print(data)
