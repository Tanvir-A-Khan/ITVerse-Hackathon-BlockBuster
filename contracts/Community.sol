// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ERC20.sol";
import "./ArtContract.sol";

contract Community is ERC20 , ArtContract{
    string title;
    uint communityType;
    string description;
    address public owner;
    uint public reserve;
    constructor(
        string memory _title,
        uint _communityType,
        string memory _description,
        string memory _tokenName,
        string memory _sybmol,
        uint totalToken,
        address _owner

    )ERC20(_tokenName,_sybmol, totalToken){
        title = _title;
        communityType = _communityType;
        description = _description;
        owner = _owner;

    }

    function getCommunity()external view returns (string memory,uint,string memory){
        return (title,communityType,description);
    }
    function getowner()external view returns(address){
        return owner;
    }
    function setReserve(uint amount) external {
        reserve += amount;
    }
    function getReserve() external view returns (uint){
        return reserve;
    }




}