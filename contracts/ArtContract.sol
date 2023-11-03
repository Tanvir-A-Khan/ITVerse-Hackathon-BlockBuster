// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ArtContract{
    
    mapping(address=>uint[]) ownerArts;
    uint public generalArtPrice = 100;
    uint public exclusiceArtPrice = 1000;
    

    // uint category = 0,1; = > general , exclusive
    struct Art{
        string artUri;
        address owner;
        address creator;
        uint price;
        uint category;
        uint stake;
        uint time;
        int vote;
    }

    string[] status = ["Pending","Deployed"];
    
    Art[] public arts;

    function getAllArts() external view returns (Art[] memory){
        return arts;
    }

    function getArtsSize() external view returns (uint){
        return arts.length;
    }

    function uploadArt(
        string memory artUri,
        address artowner,
        address creator,
        uint price,
        uint category,
        uint stake
        
    ) external returns (uint){
        Art memory temp = Art(artUri,artowner,creator,price,category,stake,block.timestamp + 1 minutes,0);
        arts.push(temp);
        return (arts.length-1);
    }


    function getArtPriceofCommunity() external view returns (uint, uint){
        return (generalArtPrice,exclusiceArtPrice);
    }

    function getPendingArtsArray() external view returns (uint[] memory) {
        uint[] memory pendingArtIndices = new uint[](arts.length);
        uint count = 0;

        for (uint i = 0; i < arts.length; i++) {
            if (getStatus(i)) {
                pendingArtIndices[count] = i;
                count++;
            }
        }

        // Create a new array with the correct size to hold only the pending art indices
        uint[] memory result = new uint[](count);

        for (uint j = 0; j < count; j++) {
            result[j] = pendingArtIndices[j];
        }

        return result;
    }

//    function ownerArtArray() external view returns (uint[] memory) {
//         uint[] memory num = new uint[](arts.length);
//         uint count = 0;

//         for (uint i = 0; i < arts.length; i++) {
//             if (arts[i].owner == msg.sender) {
//                 num[count] = i;
//                 count++;
//             }
//         }

//         // Create a new array with the correct size to hold only the owner's art indices
//         uint[] memory result = new uint[](count);

//         for (uint j = 0; j < count; j++) {
//             result[j] = num[j];
//         }

//         return result;
//     }

    function getArtInfo(uint artId) external view  returns (
        string memory artUri,
        address owner,
        address creator,
        uint price,
        uint category,
        uint stake,
        uint time,
        int vote
    ){


        artUri = arts[artId].artUri;       
        owner = arts[artId].owner;       
        creator = arts[artId].creator;       
        price = arts[artId].price;       
        category = arts[artId].category;       
        stake = arts[artId].stake;       
        time = arts[artId].time;       
        vote = arts[artId].vote;       
        // if(!getStatus(artId)){

        //     if(vote<0) {

        //         category = 100;

        //     }

        // }
        
    }

    function getStatus(uint artId) public view returns (bool ){
        return (arts[artId].time >= block.timestamp);
    }

    function downVote(uint artId, int votersToken) public {
        require(getStatus(artId), "Voting time is over");
        arts[artId].vote -= votersToken;
        
    }
    
    function upVote(uint artId, int votersToken) external {
        require(getStatus(artId), "Voting time is over");
        arts[artId].vote += votersToken;
        
    }

    





}