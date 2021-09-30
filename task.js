let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

console.log("Original numbers list: ", numbers)

for(let j = numbers.length ; j >= 0 ; j--)
{
    for(let i = 0 ; i < j - 1 ; i++)
    {
        if(numbers[i] > numbers[i + 1])
        {
            let temp = numbers[i];
            numbers[i] = numbers[i + 1]
            numbers[i + 1] = temp;
        }
    }
}

console.log("Numbers list After sorting: ", numbers)

for(let i = numbers.length ; i > 0 ; i--)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[j] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)


