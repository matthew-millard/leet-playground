export function findMiddleValue(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        if (left === right) {
            return arr[left];
        }
        else if (left === right - 1) {
            return arr[left]; // round down if array is even
        }
        left++;
        right -= 1;
    }
}
export function isPalindrome(string) {
    if (typeof string !== 'string' || !string.trim())
        return false;
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
export function sortedTwoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return true;
        }
        else if (sum > target) {
            // move right pointer
            right--;
        }
        else {
            // move left pointer
            left++;
        }
    }
    return false;
}
export function combine(arr1, arr2) {
    let i = 0;
    let j = 0;
    let newArray = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            newArray.push(arr1[i]);
            i++;
        }
        else {
            newArray.push(arr2[j]);
            j++;
        }
    }
    // Append the remaining elements from arr1, if any
    while (i < arr1.length) {
        newArray.push(arr1[i]);
        i++;
    }
    // Append the remaining elements from arr2, if any
    while (j < arr2.length) {
        newArray.push(arr2[j]);
        j++;
    }
    return newArray;
}
