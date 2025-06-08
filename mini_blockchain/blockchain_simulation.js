
const crypto = require('crypto');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        const blockString = this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce;
        return crypto.createHash('sha256').update(blockString).digest('hex');
    }
}

let blockchain = [];
let genesisBlock = new Block(0, Date.now().toString(), { amount: 100 }, '0');
blockchain.push(genesisBlock);

let block1 = new Block(1, Date.now().toString(), { amount: 50 }, genesisBlock.hash);
blockchain.push(block1);

let block2 = new Block(2, Date.now().toString(), { amount: 75 }, block1.hash);
blockchain.push(block2);

console.log("Blockchain:");
blockchain.forEach(block => console.log(block));

console.log("\n--- Tampering block 1 ---");
block1.data = { amount: 999 };
block1.hash = block1.calculateHash();

console.log("Blockchain after tampering:");
blockchain.forEach(block => console.log(block));

console.log("\nNote: block1's hash changed, making block2's previousHash invalid. Entire chain after block1 is invalid!");
