let numbers: number[] = [1, 2, 3, 4, 5];

let fruits: string[] = ["apple", "banana", "orange"];

let mixedArray: (number | string)[] = [1, "two", 3, "four"];

let infer = [1, 2, 3];

let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}

for (let i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}
