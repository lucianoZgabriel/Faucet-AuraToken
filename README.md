# Aura Token Faucet
A full-stack web3 application that allows users to claim Aura Tokens once per day through a user-friendly interface. The project consists of a smart contract, backend API, and frontend application with MetaMask integration and reCAPTCHA verification.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Smart Contract Functions](#smart-contract-functions)
- [API Endpoints](#api-endpoints)
- [Security Features](#security-features)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## Features

- Daily token distribution through a faucet system
- MetaMask wallet integration
- reCAPTCHA verification to prevent abuse
- 24-hour cooldown period per wallet
- Backend API for handling token distribution
- User-friendly frontend interface
- ERC20 compliant token contract

## Prerequisites

- Node.js and npm installed
- MetaMask browser extension
- Access to an Ethereum node (e.g., Infura)
- Google reCAPTCHA site key

## Environment Variables

Backend (.env)
```
PORT=3001
NODE_URL=your_ethereum_node_url
PRIVATE_KEY=your_private_key_without_0x
WALLET=your_wallet_address
CONTRACT_ADDRESS=your_token_contract_address
```
Frontend (.env)
```
REACT_APP_API_URL=http://localhost:3001
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```
## Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/aura-token-faucet.git
cd aura-token-faucet
```
Install backend dependencies:
```bash
cd backend
npm install
```
Install frontend dependencies:
```bash
cd frontend
npm install
```

## Running the Application

Start the backend server:
```bash
cd backend
npm run start
```
Start the frontend application:
```bash
cd frontend
npm start
```

The frontend application will be available at http://localhost:3000, and the backend API will run on http://localhost:3001.
## Usage

- Visit the application in your browser
- Connect your MetaMask wallet using the "Connect Wallet" button
- Complete the reCAPTCHA verification
- Click to receive your Aura Tokens
- Confirm the transaction in MetaMask
- Wait 24 hours before claiming again

## Smart Contract Functions
The Aura Token contract includes standard ERC20 functions plus:

- mint(address to): Mints new tokens to the specified address
- setMintAmount(uint256 amount): Sets the amount of tokens to mint
- setMintDelay(uint256 delayInSeconds): Sets the delay between mints

## API Endpoints

POST /mint/:wallet: Initiates the minting process for the specified wallet address

## Security Features

- Helmet middleware for enhanced API security
- CORS protection
- reCAPTCHA verification
- 24-hour cooldown period per wallet
- MetaMask signature verification

## Contributing

- Fork the repository
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author 
Luciano Zanin Gabriel

## Acknowledgments

- OpenZeppelin for the ERC20 implementation
- MetaMask for wallet integration
- Google reCAPTCHA for verification services
