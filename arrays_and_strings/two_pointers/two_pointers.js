export function getMiddleValueOfArray(arr) {
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
