// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./Community.sol";
import "./ABX.sol";

contract Platform{
    Community[] public communities;
    address public owner;

    struct COMMUNITYINFO{
        string title;
        uint communityType;
        string description;
        string tokenName;
        string sybmol;
        uint totalToken;
    }
    constructor(){
        owner = msg.sender;
    }

    string[] communityType = ["Portrait", "Photography", "Painting"];

    function getCategories() external view returns (string[] memory){
        return  communityType;
    }

    uint public  comvalue = 1000;

    function getCommunityValue() external view returns (uint){
        return comvalue;
    }

    function createCommunity(
        string memory _title,
        uint _communityType,
        string memory _description,
        string memory _tokenName,
        string memory _sybmol,
        uint communityInitialSupply
        
    ) external returns (bool) {

        require(balanceMap[msg.sender]>=comvalue,"Minimum Community Creation value is 1000");
        balanceMap[msg.sender] -= comvalue;

        Community com = new Community(_title,_communityType,_description,_tokenName,_sybmol, communityInitialSupply, msg.sender);
        communities.push(com);


        return  true;
    }

    function getACommunity(uint id) public  view returns(string memory,uint ,string memory,string memory,string memory, uint ){
        (string memory m1, string memory m2, uint m3) = communities[id].getTokenInfo();
        (string memory t1, uint t2, string memory t3)= communities[id].getCommunity();
        return (t1,t2,t3,m1,m2,m3);
    }

    function getAllCommunity() public view returns (COMMUNITYINFO[] memory) {
    COMMUNITYINFO[] memory cm = new COMMUNITYINFO[](communities.length);

        for (uint i = 0; i < communities.length; i++) {
            (string memory t1, uint t2, string memory t3, string memory t4, string memory t5, uint t6) = getACommunity(i);
            COMMUNITYINFO memory info = COMMUNITYINFO(t1, t2, t3, t4, t5, t6);
            cm[i] = info;
        }   
        return cm;
    }

    function checkCommunityStakeholder(address user, uint id) public view returns (bool){
        if(communities[id].getowner() == user) return true;
        return  false;
    }

    function getABXValue() external pure returns(uint){
        return 1 wei;
    } 

    mapping(address => uint) balanceMap;

    function buyABX() payable  external returns (uint) {
        require( msg.value > 0);
        uint amount = msg.value;
        balanceMap[msg.sender] += amount;
         uint refund = msg.value - amount;
        if(refund > 0) {
            payable (msg.sender).transfer(refund);
        }

        return balanceMap[msg.sender];
    }
    function getUserABXInfo() external view returns (uint){
        return balanceMap[msg.sender];        
    }
    
    // function getNewCommunityCost() external pure returns(uint){
    //     return 10000 wei;
    // }

    function exchangeABXwithCommunityNativeToken(uint id,uint ABXamount) public returns (uint, uint) {

        balanceMap[msg.sender] -= ABXamount;
        communities[id].mint(ABXamount);
        
        return (balanceMap[msg.sender], communities[id].balanceOf(msg.sender));


    }

    function exchangeCommunityNativeTokenwithABX(uint communityId, uint CommunityNativeToken) external returns (uint, uint){
        balanceMap[msg.sender] += CommunityNativeToken;
        communities[communityId].burn(CommunityNativeToken);
        return (balanceMap[msg.sender], communities[communityId].balanceOf(msg.sender));
    } 
    

    function getUserCommunityNativeTokenInfo(uint communityId)external view returns (uint){
        return  communities[communityId].getBalance();
    }

    

}