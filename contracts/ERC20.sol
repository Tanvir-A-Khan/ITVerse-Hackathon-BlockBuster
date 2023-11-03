// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./IERC20.sol";

contract ERC20 is IERC20 {
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
    string public name;
    string public symbol;
    uint8 public decimals = 18;
    

    constructor(
        string memory _name,
        string memory _symbol,
        uint totalToken
    ){
        name = _name;
        symbol = _symbol;
        totalSupply = totalToken;
    }
    function getBalance() external view returns (uint){
        return balanceOf[msg.sender];
    }

    function getTokenInfo()external view returns (string memory,string memory,uint ){
        return (name, symbol, totalSupply);
    }


    function transfer(address recipient, uint amount) external returns (bool) {
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool) {
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function mint(uint amount)  external {
        // require(msg.value >= amount, "Amount should be same as wei ");
        // require(msg.sender==owner,"Not the owner");
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        // uint refund = msg.value - amount;
        // if(refund > 0) {
        //     payable (msg.sender).transfer(refund);
        // }

        // emit Transfer(address(0), msg.sender, amount);
    }

    function burn(uint amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }
}
