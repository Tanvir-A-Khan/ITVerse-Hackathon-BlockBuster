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

    function checkCommunityStakeholder( uint id) public view returns (bool){
        if(communities[id].getowner() == msg.sender) return true;
        return  false;
    }

    mapping(address => uint) balanceMap;

    function buyABX() payable  external  {
        require( msg.value > 0);
        uint amount = msg.value;
        balanceMap[msg.sender] += amount;
    }
    function getUserABXAmount() external view returns (uint){
        return balanceMap[msg.sender];        
    }


    function exchangeABXwithCommunityNativeToken(uint id,uint amount, bool abxtocnt) public returns (uint, uint) {

        if(abxtocnt){
            balanceMap[msg.sender] -= amount;
            communities[id].mint(amount);
            return (balanceMap[msg.sender], communities[id].balanceOf(msg.sender));

        }
        
        balanceMap[msg.sender] += amount;
        communities[id].burn(amount);
        return (balanceMap[msg.sender], communities[amount].balanceOf(msg.sender));

    }

    

    function getUserCommunityNativeTokenInfo(uint communityId)external view returns (uint){
        return  communities[communityId].getBalance();
    }

/////////// ART CONTRACT INTERACTIONS

    function uploadArtifact(
        uint communityId,
        string memory artUri,
        uint price,
        uint category
    ) external returns (uint) {
        require(100<=communities[communityId].getBalance(), "Not enought token");
        communities[communityId].burn(100);
        communities[communityId].setReserve(100);
        return communities[communityId].uploadArt(artUri,msg.sender,msg.sender,price,category,100);
    }

    function getPendingArtifactsArray( uint communityId ) internal  view returns (uint[] memory) {
        return communities[communityId].getPendingArtsArray();
    }
    function upvoteArtifact(
         uint communityId,
         uint artId
    )external {
        communities[communityId].upVote(artId, int(communities[communityId].getBalance()) );
    }
    function downvoteArtifact(
         uint communityId,
         uint artId
    )external {
        communities[communityId].downVote(artId,int(communities[communityId].getBalance()));
    }
    receive() external payable { }

    function getCountofArtifacts(uint communityId) external view returns (uint){
        return communities[communityId].getArtsSize();
    }

    function getArtifactInfo(
        uint communityId,
        uint artId
        
    ) external payable  returns ( 
        string memory artUri,
        address oowner,
        address creator,
        uint price,
        uint category,
        uint stake,
        uint time,
        int vote
        ) {
         (
            artUri,
            oowner,
            creator,
            price,
            category,
            stake,
            time,
            vote
        ) = communities[communityId].getArtInfo(artId);
    }
    function getArtifactStatus(
        uint communityId,
        uint artId
    ) external view returns (bool ){
        return communities[communityId].getStatus(artId);
    }
    function getCommunityReserve(uint communityId)external view returns (uint){
        return communities[communityId].getReserve();
    }

    

}