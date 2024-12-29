export function isSubset(arr1, arr2) {
    // check for empty arrays
    if (!arr1.length || !arr2.length)
        return false;
    let largerArray;
    let smallerArray;
    let hashTable = new Map();
    //   determine the larger array
    if (arr1.length > arr2.length) {
        largerArray = arr1;
        smallerArray = arr2;
    }
    else {
        largerArray = arr2;
        smallerArray = arr1;
    }
    // put largerArray values into a hash table
    for (const value of largerArray) {
        hashTable.set(value, true);
    }
    for (const value of smallerArray) {
        if (!hashTable.get(value)) {
            return false;
        }
    }
    return true;
}
export function findFirstDuplicate(arr) {
    let hashTable = new Map();
    for (const value of arr) {
        if (hashTable.has(value)) {
            return value;
        }
        else {
            hashTable.set(value, true);
        }
    }
    return null;
}
export function getIntersection(arr1, arr2) {
    const intersectionArray = [];
    let hashTable = new Map();
    for (let i = 0; i < arr1.length; i++) {
        hashTable.set(arr1[i], true);
    }
    for (let j = 0; j < arr2.length; j++) {
        if (hashTable.has(arr2[j])) {
            intersectionArray.push(arr2[j]);
        }
    }
    return intersectionArray;
}
