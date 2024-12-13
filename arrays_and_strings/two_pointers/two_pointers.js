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
export function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
        }
        j++;
    }
    return i === str1.length;
}
export function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
        left++;
        right--;
    }
    return arr;
}
export function squaresOfASortedArray(arr) {
    // square each number in the array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    // sort array in non-decreasing order
    let isSorted = false;
    while (isSorted === false) {
        let modificationCount = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                modificationCount++;
            }
        }
        if (modificationCount === 0) {
            isSorted = true;
        }
    }
    return arr;
}
