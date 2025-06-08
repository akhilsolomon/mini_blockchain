
const miner = { id: "miner1", power: Math.floor(Math.random() * 100) };
const staker = { id: "staker1", stake: Math.floor(Math.random() * 100) };
const voters = [
    { id: "voter1", vote: "delegateA" },
    { id: "voter2", vote: "delegateB" },
    { id: "voter3", vote: "delegateA" }
];

function PoW() {
    console.log(`PoW - Miner with highest power selected: ${miner.id} (power=${miner.power})`);
}

function PoS() {
    console.log(`PoS - Validator with highest stake selected: ${staker.id} (stake=${staker.stake})`);
}

function DPoS() {
    const tally = {};
    voters.forEach(v => tally[v.vote] = (tally[v.vote] || 0) + 1);
    const delegate = Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0];
    console.log(`DPoS - Delegate selected by votes: ${delegate}`);
}

console.log("\nConsensus Mechanism Simulations:");
PoW();
PoS();
DPoS();
