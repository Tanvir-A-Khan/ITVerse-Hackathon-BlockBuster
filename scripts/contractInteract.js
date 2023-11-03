const {ethers} = require("hardhat");
require("dotenv").config();
const {abi} = require("../artifacts/contracts/AnotherContract.sol/AnotherContract.json")

const deployedAddress = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d";

const main = async () => {
    const provider = new ethers.JsonRpcProvider(process.env.HOST_URL);
    const signer = await provider.getSigner();
    
    const contract = new ethers.Contract(deployedAddress,abi,signer);

    // Listen for specific event [1st param, 2nd param, event]
    contract.on("eventEmitted", (userAddress,age,_event) => {
        console.log(userAddress);
        console.log(age);
        console.log(_event.log.args);

        _event.removeListener();
    })

    let [name , age] = await contract.getCred(); // Function call
    await contract.pay(13,"Efty",{value: ethers.parseEther("10")}); // Payable Function call with parameters
    [name , age] = await contract.getCred(); // Function call
    const balance = await ethers.provider.getBalance(deployedAddress); // Check balance of contract

    await contract.eventEmitter(); // Call Event Emitter function

    console.log(name,Number(age));
    console.log(Number(balance)/1e18);
};

main().catch(err => {
    console.log(err);
    process.exitCode = 1;
});