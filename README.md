# Crowd Funding Smart Contract

Smart Contract for crowd funding

A decentralized crowdfunding platform powered by Ethereum smart contracts. This repository contains the core logic for creating, funding, and managing crowdfunding campaigns in a transparent, trustless, and secure manner using Solidity and JavaScript tooling.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Compiling Contracts](#compiling-contracts)
  - [Testing](#testing)
  - [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Campaign Creation:** Start a fundraising campaign with goal and deadline.
- **Contribution:** Fund campaigns with Ether until the goal or deadline.
- **Withdrawal and Refunds:** Campaign creators withdraw funds if successful, contributors claim refunds if not.
- **Transparency:** All actions and transactions are recorded on the Ethereum blockchain.
- **Security:** Funds are handled only by the smart contract logic.
- **Test Suite:** Includes automated tests for all main contract features.

---

## Demo

_You can deploy and interact with the contract on an Ethereum testnet (e.g., Goerli) using Hardhat or Remix. Frontend integration is not included in this repository but can be developed easily using Ethers.js or Web3.js._

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/) (as a dev dependency)
- [MetaMask](https://metamask.io/) or any Ethereum wallet (for testnet/mainnet interaction)

### Installation

```bash
git clone https://github.com/mahajang214/crowd-funding-smart-contract.git
cd crowd-funding-smart-contract
npm install
```

### Compiling Contracts

```bash
npx hardhat compile
```

### Testing

```bash
npx hardhat test
```

### Deployment

1. Start a local Hardhat node (in a separate terminal):

   ```bash
   npx hardhat node
   ```

2. Deploy the contract to the local network:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

   _To deploy to Goerli or other networks, update `hardhat.config.js` with your credentials and desired network._

---

## Project Structure

```text
contracts/           # Solidity smart contracts (.sol)
scripts/             # Deployment scripts
test/                # Automated test cases (JavaScript)
hardhat.config.js    # Hardhat configuration
package.json         # Project metadata and dependencies
README.md            # Project documentation
```

---

## Usage

- **Deploy the contract** using the provided scripts or manually in Remix.
- **Start a campaign** by calling the appropriate function (see contract documentation).
- **Fund** a campaign by sending Ether to the campaign contract.
- **Withdraw** funds (if you are the owner and the goal is met), or **claim refund** (if the campaign failed).

All interactions can be scripted in JavaScript using Ethers.js or performed in Remix.

---

## Contributing

Contributions are welcome! Please fork the repo and create a pull request with your feature, bug fix, or improvement. For major changes, open an issue first to discuss what you would like to change.

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

Maintained by [mahajang214](https://github.com/mahajang214).  
For questions, suggestions, or support, please create an issue in this repository.
