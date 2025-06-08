
const crypto = require('crypto');

class Block {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.timestamp = Date.now().toString();
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        const blockString = this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce;
        return crypto.createHash('sha256').update(blockString).digest('hex');
    }

    mineBlock(difficulty) {
        const target = Array(difficulty + 1).join("0");
        let startTime = Date.now();

        while (!this.hash.startsWith(target)) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        let endTime = Date.now();
        console.log(`Block mined: ${this.hash}`);
        console.log(`Nonce attempts: ${this.nonce}`);
        console.log(`Time taken: ${(endTime - startTime) / 1000}s`);
    }
}

let block = new Block(1, { amount: 200 });
console.log("Mining block...");
block.mineBlock(4);
