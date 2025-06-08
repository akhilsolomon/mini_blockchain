
# Mini Blockchain Simulation 🚀

This project simulates a basic blockchain and compares different consensus mechanisms.

## Files
- **blockchain_simulation.js**  
  Simulates a 3-block blockchain and shows how tampering affects the chain’s integrity.

- **mining_simulation.js**  
  Simulates Proof-of-Work mining by incrementing the nonce until the hash starts with a difficulty target (e.g., "0000").

- **consensus_demo.js**  
  Simulates and compares PoW, PoS, and DPoS validator selection logic.

## Run the code
```
node blockchain_simulation.js
node mining_simulation.js
node consensus_demo.js
```

## Key Learnings
- Blockchain’s immutability is protected by cryptographic hashes.
- PoW consumes energy due to intense computations.
- PoS and DPoS are energy-efficient and more democratic.

