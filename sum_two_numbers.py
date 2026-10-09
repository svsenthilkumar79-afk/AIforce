def sum_two_numbers(a: float, b: float) -> float:
    """Return the sum of two numbers.

    Examples:
    >>> sum_two_numbers(2, 3)
    5
    >>> sum_two_numbers(-1.5, 2)
    0.5
    """
    return a + b


if __name__ == "__main__":
    try:
        a = float(input("Enter first number: "))
        b = float(input("Enter second number: "))
        result = sum_two_numbers(a, b)
        # Print without trailing .0 when the result is an integer value
        print(int(result) if result.is_integer() else result)
    except ValueError:
        print("Please enter valid numbers.")
