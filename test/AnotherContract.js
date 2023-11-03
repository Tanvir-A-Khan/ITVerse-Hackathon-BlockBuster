const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("AnotherContract", () => {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.

    const deployFixture = async () => {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const eth_amount = ethers.parseEther("0.001");

        const Contract = await ethers.getContractFactory("AnotherContract");
        const contract = await Contract.deploy("Shanto", 23, { value: eth_amount });

        return { contract, owner, otherAccount, eth_amount };
    };

    describe("Deployment", () => {
        it("Should set right constructor", async () => {
            const { contract } = await loadFixture(deployFixture);

            expect(await contract.name()).to.equal("Shanto", "Name not matched");
            expect(await contract.age()).to.equal(23, "Age not matched");
        });
        it("Should receive right funds", async () => {
            const { contract, eth_amount } = await loadFixture(deployFixture);

            expect(await ethers.provider.getBalance(contract.target)).to.equal(
                eth_amount
            );
        });
    });

    describe("Pay", () => {
        describe("Validation", () => {
            it("Should revert with the right error if called from another account", async () => {
                const { contract, otherAccount, eth_amount } = await loadFixture(
                    deployFixture
                );

                await expect(
                    contract.connect(otherAccount).pay(22,"Efty",{ value: eth_amount })
                ).to.be.revertedWith("Only the contract owner can call this function");
            });
            it("Should have correct funds", async () => {
                const { contract, eth_amount } = await loadFixture(deployFixture);

                await contract.pay(22,"Efty",{ value: eth_amount });

                await expect(await ethers.provider.getBalance(contract.target)).to.equal(eth_amount + eth_amount, `Contract should have ${eth_amount + eth_amount}`);
            });
        });
    });
});
