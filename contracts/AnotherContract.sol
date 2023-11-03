// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract AnotherContract {
    address public owner;
    string public name;
    uint public age;
    uint public balance;

    /**
    * @dev Events based on user contract calls
    */
    event eventEmitted(address userAddress,uint256 val);

    /**
     * @dev The caller account is not authorized to perform an operation.
     */
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _; // This underscore represents the function code that the modifier wraps
    }

    constructor(string memory _name, uint _age) payable {
        name = _name;
        age = _age;
        balance += msg.value;
        owner = msg.sender;
    }

    function checkBalance() public view returns (uint) {      
        return balance;
    }

    function getCred() public view returns (string memory, uint) {
        return (name, age);
    }

    /**
     * @dev Event Emitter Function
     *      
     *      Event Emitter Function cannot have any return
     */
    function eventEmitter() public {
        emit eventEmitted(msg.sender,21203010);
    }

    /**
     * @dev Send funds to contract. Only Owners are allowed
     */
    function pay(uint _age,string memory _name) public onlyOwner payable returns (uint) {
        name = _name;
        age = _age;
        balance += msg.value;
        return balance;
    }
}
