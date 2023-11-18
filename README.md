# ChainSettle

## Prerequisites
- Node.js and Yarn installed
- MetaMask extension installed in the browser
- (If applicable) Ethereum blockchain environment setup for deploying contracts

## Installation
1. Clone the repository:
   ```
   git clone [repository-url]
   ```
2. Navigate to the project directory:
   ```
   cd splitwise-crypto-integration-app
   ```
3. Install dependencies:
   ```
   yarn install
   ```

## Running the Application

- (If applicable) To deploy smart contracts to the blockchain:
   ```
   yarn deploy
   ```
- (If applicable) To interact with the local blockchain:
   ```
   yarn chain
   ```

- To start the local development server:
   ```
   yarn start
   ```

## Usage
- Open the application in the browser.
- Connect to MetaMask using the provided button on the webpage.
- Follow the in-app instructions for managing and settling expenses.

---

This README assumes a more complex project structure than what you currently have. If your project evolves to include backend services, smart contract development, or other features requiring these commands, you would need to set up the appropriate package.json scripts and dependencies.

Since your current project is a simple HTML file, it doesn't require Yarn or these commands. If you plan to expand the project to include these features, let me know, and I can provide more detailed instructions accordingly.

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`.