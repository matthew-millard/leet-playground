export function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexOfLowestNumber = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfLowestNumber]) {
                indexOfLowestNumber = j;
            }
        }
        if (indexOfLowestNumber !== i) {
            let temp = arr[i];
            arr[i] = arr[indexOfLowestNumber];
            arr[indexOfLowestNumber] = temp;
        }
    }
    return arr;
}
export function getSumOfArrayAfterElementsDoubled(arr) {
    let sum = 0;
    // Double each number in the array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
        sum += arr[i]; // add the doubled number to current sum
    }
    return sum;
}
console.log(getSumOfArrayAfterElementsDoubled([1, 2, 3, 4, 5]));
