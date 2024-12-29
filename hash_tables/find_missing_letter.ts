export function findMissingLetter(str: string): string | null {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  // converts all characters to lowercase and stores each character in an element in an array
  const strArray = str.toLowerCase().split("");

  // store each character in a hash table
  interface HashTable {
    [key: string]: boolean;
  }

  const hashTable: HashTable = {};

  for (const char of strArray) {
    if (char !== " ") {
      hashTable[char] = true;
    }
  }

  // loop through each character of the alphabet and check if it doesn't exist in the hashtable, return missing letter if not
  for (let i = 0; i < ALPHABET.length; i++) {
    if (!hashTable[ALPHABET[i]]) {
      return ALPHABET[i]; // return missing letter
    }
  }

  return null;
}
