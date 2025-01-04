export class PrinterManager {
  queue: string[];

  constructor() {
    this.queue = [];
  }

  // add job to the printing queue
  add(item: string) {
    this.queue.push(item);
  }

  // print first in queue
  print() {
    console.log(this.queue.shift());
  }

  // delete specific printing job
  delete(index: number) {
    this.queue.splice(index, 1);
  }

  // print all jobs in order
  run() {
    while (this.queue.length > 0) {
      console.log(this.queue.shift());
    }
  }
}

const printManager = new PrinterManager();
printManager.add("Hello Hamish");
printManager.add("Hello Finn");
printManager.add("Hello Amy");
printManager.add("Hello Islay");

console.log(printManager.queue);
printManager.run();
console.log(printManager.queue);
