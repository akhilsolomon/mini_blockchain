# Blockchain Platform Comparison

| **Blockchain Name**    | **Type**      | **Consensus Mechanism Used**     | **Permission Model** | **Speed / Throughput (TPS)** | **Smart Contract Support**    | **Token Support**   | **Typical Use Case**                    | **Notable Technical Feature**           |
|------------------------|---------------|----------------------------------|-----------------------|-------------------------------|-------------------------------|---------------------|------------------------------------------|-----------------------------------------|
| **Ethereum**           | Public        | Proof of Stake (Ethereum 2.0)    | Open                  | ~30–100 TPS (Layer 1)         | Yes – Solidity                | Native (ETH)        | Decentralized apps, NFTs, DeFi          | EVM compatibility, Layer 2 scaling      |
| **Hyperledger Fabric** | Private       | Pluggable (Raft, Kafka, etc.)    | Permissioned          | ~1,000+ TPS                   | Yes – Go, Java, JavaScript    | No native token     | Enterprise supply chains, asset tracking | Channel-based data privacy              |
| **R3 Corda**           | Consortium    | Notary-based (Raft/BFT options)  | Permissioned          | ~200–500 TPS                  | Yes – JVM-based languages      | No native token     | Interbank settlements, trade finance    | Peer-to-peer messaging, strong privacy  |

---

# Short Report: Platform Comparison

The three platforms—Ethereum, Hyperledger Fabric, and R3 Corda—demonstrate different strengths aligned with their intended use cases.

**Ethereum** is a public blockchain designed for openness and decentralisation. It supports Solidity-based smart contracts and has a large developer community. While its base-layer throughput is modest (~30–100 TPS), Layer 2 solutions help scale dApps significantly.

**Hyperledger Fabric**, by contrast, is a private, permissioned blockchain tailored for enterprise use. It provides high throughput (~1,000+ TPS), modular consensus options, and data isolation through channels, making it a great choice for use cases where privacy and control are key.

**R3 Corda** is unique among blockchains for its peer-to-peer transaction model and strong emphasis on privacy and regulatory compliance. It doesn’t broadcast transactions to all nodes but instead uses a notary for consensus, which aligns well with inter-organisational financial applications.

### Platform Recommendations:

- **Decentralized app (dApp)**: *Ethereum* – Open network, strong ecosystem, smart contract support.
- **Supply chain among known partners**: *Hyperledger Fabric* – High speed, privacy, and modular design.
- **Inter-bank financial application**: *R3 Corda* – Designed for finance, legal clarity, privacy-focused.

Each platform has unique strengths, and the right choice depends on the application's specific trust model and performance needs.
