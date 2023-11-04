# ITVerse-Hackathon-BlockBuster

**ArtBlock: The Evolution of Decentralized Art Communities**

**ArtBlock** is a decentralized platform for creator communities, using DAOs and NFTs. Users create communities with a native token, publish items for approval, and decide on minting via community voting. Exclusive items feature Dutch auctions, while general items have set prices. NFT ownership can change hands with a resale market and dynamic royalties, and exclusive items are non-transferable.


## Badges

![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Remix](https://img.shields.io/badge/remix-000000?style=for-the-badge&logo=remix&logoColor=white)
![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

## Acknowledgements

 - [Solidity](https://www.youtube.com/watch?v=xv9OmztShIw&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p)

 - [Metamask](https://metamask.io/)


## Installation

Installation and running of this project to the local machine may vary the dependencies. You may follow the Installation process :

1. Copy the URL for the repository. To clone the repository using HTTPS, under "HTTPS", click. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click.To clone a repository using GitHub CLI, click GitHub CLI, then click .


2. Open Git Bash. 
3. Change the current working directory to the location where you want the cloned directory.
4. Clone the repository to your local machine using the following command:

```bash
  git clone https://github.com/Tanvir-A-Khan/ITVerse-Hackathon-BlockBuster.git

```
5. Press Enter to create your local clone.

6. Go to the project directory

```bash
  cd client

```
7. Install dependencies

```bash
  npm install

```



## Run Locally

 move to client
```bash
  cd client

```
 Checkout the Main Branch
```bash
  git checkout Main

```
 Start the Server
```bash
  npm start

```
This will start the development server and it will be accessible at http://localhost:port.
Port may vary from machine to machine.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PRIVATE_KEY`

The `PRIVATE_KEY` comes from the MetaMask wallet in this project.
## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Screenshots
- Home page

- Metamask Connection

- Buy ABX

- Community Page

- Community Voting Page

- Art Collection in Community

- More Details

- Buy Art

- Upload to Community

- Buy Community Native Token

- My Collection

- My Collection Hover

- Sell Iteam

- Dutch Auction


## Branches
**Main**
- Main brach is the most stable branch.
- Main brach contains both client and Smart Contract details.

**UI UX**
- UI UX branch contains the interface files.
- UI UX is optimal for running the user interface only.

## Run UI UX Locally

 move to client
```bash
  cd client

```
 Checkout the UI UX
```bash
  git checkout UI UX

```
 Start the Server
```bash
  npm start

```

**Interface0**
- Interface0 brach is an interface testing brach.
- Initially Interface0 has been created to test the interface features.

## Run Interface0 Locally

 move to client
```bash
  cd client

```
 Checkout the interface0
```bash
  git checkout interface0

```
 Start the Server
```bash
  npm start

```

## API Reference

#### Retrieve MetaMask Wallet Address

```http
  GET /wallet/address
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. MetaMask address under account name  |

#### MetaMask Address Authentication

```http
  GET /wallet/address?api_key=YOUR_API_KEY
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Your API key for authentication |

#### Ethereum API

```http
  GET window.ethereum.request
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Return a boolean result |


```http
  GET eth_gasPrice
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Ethereum API Gas price |

```http
  GET eth_gasPrice
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**.Ethereum API Gas price |

```http
  GET eth_sendTransaction
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**.Ethereum API Gas price |


## Features

1. Users create unique communities with native tokens.
2. Ability to buy ABX tokens with Ether and spend them to create new communities.
3. Creators publish art, stake tokens for publication, and community members vote for approval.
4. System for minting NFTs for approved exclusive art with Dutch auctions.
5. Platform for buying and selling art products using community tokens.
6. Interface for displaying token balances and transaction history.
7. Enable transparent decision-making within communities.
8. Create a decentralized exchange for trading ABX and community tokens.
9. Non-transferable items, dynamic royalties, and innovative functionalities for the art ecosystem.


## Tech Stack

**Client:**
- [React](https://react.dev/)
- [Tailwind](https://tailwindcss.com/)

**Smart contract**
- [Solidity](https://www.youtube.com/watch?v=xv9OmztShIw&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p)


## Tools
**IDE**
- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
- [Remix](https://remix.ethereum.org/)


**Wallet**
 - [Metamask](https://metamask.io/)

**Environment**
 - [Hardhat](https://hardhat.org/)

 **Testing**
- [Hardhat](https://hardhat.org/)
- [Solidity code](https://github.com/sc-forks/solidity-coverage)


## Optimizations

Gas optimization has been used for the smart contract.


## Authors

- [Tanvir Ahmed Khan](https://github.com/mostlyTanvir/)

- [Shahidul Alam](https://github.com/shz-code)

- [Rakibul Hasan Dihan](https://github.com/dihanrh)
