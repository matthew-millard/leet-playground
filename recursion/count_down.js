export function countDown(startingNumber) {
    // base case
    if (startingNumber < 0) {
        console.log("Takeoff... 🚀");
        return;
    }
    if (startingNumber === 10) {
        console.log("Ready for takeoff in:");
    }
    console.log(startingNumber);
    setTimeout(() => countDown(startingNumber - 1), 1000);
}
countDown(10);
