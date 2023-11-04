// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract ArtBlock {
    struct Community {
        uint256 id;
        string name;
        string desc;
        string tokenName;
        string tokenSymbol;
        uint256 supply;
        uint256 comType; // 0 Painting / 1 Photography
        uint256 pendingArts;
        uint256 ArtsCount;
    }

    struct Art {
        uint256 id;
        uint256 communityId;
        string uri;
        uint256 price;
        address creator;
        address owner;
        int256 voteCount;
        uint256 status; // 0 Pending 1 Approved 2 DisApproved
        bool mark;
        bool category; // 1 -> Exclusive 0 -> General
        uint256 finishTime;
    }

    struct User {
        address addr;
        uint256 ABX;
    }

    struct CommunityUser {
        uint256 communityToken;
        uint256 ArtsCount;
    }

    uint256 public communityId;

    mapping(uint256 => Community) public communities;

    mapping(uint256 => Art[]) public communityArts;

    uint256 prendingId;

    mapping(uint256 => mapping(address => CommunityUser)) public communityUsers;
    mapping(uint256 => mapping(address => bool)) public communityUserCheck;
    mapping(uint256 => mapping(address => bool)) prendingCheck;
    uint256 public artId;

    mapping(uint256 => Art) public arts;
    mapping(address => User) public users;

    uint256 votingDuration = 2;

    function registerUser() public {
        User memory user = User(_msgSender(), 0);
        users[_msgSender()] = user;
    }

    function buyABX() public payable {
        require(_msgValue() > 0, "Insufficient Fund");
        if (users[_msgSender()].addr == address(0)) {
            registerUser();
        }
        users[_msgSender()].ABX += _msgValue();
    }

    // Community
    function createCommunity(
        string memory _communityName,
        string memory _communityDesc,
        string memory _communityTokenName,
        string memory _communityTokenSymbol,
        uint256 _initial,
        uint256 _type
    ) public {
        Community memory community = Community(
            communityId,
            _communityName,
            _communityDesc,
            _communityTokenName,
            _communityTokenSymbol,
            _initial,
            _type,
            0,
            0
        );
        users[_msgSender()].ABX -= 100;

        communities[communityId] = community;

        CommunityUser memory user = CommunityUser(0, 0);

        communityUsers[communityId][_msgSender()] = user;

        communityUserCheck[communityId][_msgSender()] = true;

        communityId++;
    }

    function checkCommunityStakeHolder(
        uint256 _communityId
    ) public view returns (bool) {
        if (communityUserCheck[_communityId][_msgSender()]) {
            return true;
        }
        return false;
    }

    // Flag 1 -> ABX - Native 0 -> Native - ABX
    function exchangeTokens(
        uint256 _communityId,
        uint256 _amount,
        uint256 _flag
    ) public {
        if (_flag == 1) {
            communityUsers[_communityId][_msgSender()]
                .communityToken += _amount;
            users[_msgSender()].ABX -= _amount;
        } else {
            communityUsers[_communityId][_msgSender()]
                .communityToken -= _amount;
            users[_msgSender()].ABX += _amount;
        }
    }

    function getUserCommunityFund(
        uint256 _communityId
    ) public view returns (uint256) {
        return communityUsers[_communityId][_msgSender()].communityToken;
    }

    function getUserABXInfo() public view returns (uint256) {
        return users[_msgSender()].ABX;
    }

    // Art
    function uploadART(
        uint256 _communityId,
        uint256 _price,
        string memory _artURI,
        bool _mark
    ) public {
        Art memory art = Art(
            artId,
            _communityId,
            _artURI,
            _price,
            _msgSender(),
            _msgSender(),
            0,
            0,
            false,
            _mark,
            block.timestamp + votingDuration * 1 minutes
        );

        communities[_communityId].pendingArts++;

        arts[artId] = art;
        communityArts[_communityId].push(art);
        prendingId++;
        // User Spend
        communityUsers[_communityId][_msgSender()].communityToken -= 100;

        artId++;
    }

    function getAllCommunities() public view returns (Community[] memory) {
        uint256 length = communityId;
        Community[] memory allCommunity = new Community[](length);
        for (uint256 i = 0; i < length; i++) {
            allCommunity[i] = communities[i];
        }
        return allCommunity;
    }

    function getACommunity(
        uint256 _communityId
    ) public view returns (Community memory) {
        return communities[_communityId];
    }

    function getCommunityArts(
        uint256 _communityId
    ) public view returns (Art[] memory) {
        uint256 length = communities[_communityId].ArtsCount;
        Art[] memory allCommunityArts = new Art[](length);
        for (uint256 i = 0; i < length; i++) {
            if (communityArts[_communityId][i].status == 1) {
                allCommunityArts[i] = communityArts[_communityId][i];
            }
        }
        return allCommunityArts;
    }

    function getCommunityArt(
        uint _communityId,
        uint _artId
    ) public view returns (Art memory) {
        return communityArts[_communityId][_artId];
    }

    function getCommunityUserArts(
        uint256 _communityId
    ) public view returns (Art[] memory) {
        uint256 length = communityUsers[_communityId][_msgSender()].ArtsCount;
        Art[] memory allCommunityUsersArts = new Art[](length);
        for (uint256 i = 0; i < length; i++) {
            allCommunityUsersArts[i] = communityArts[_communityId][i];
        }
        return allCommunityUsersArts;
    }

    function getPendingArts(
        uint256 _communityId
    ) public view returns (Art[] memory) {
        uint256 length = communities[_communityId].pendingArts;
        Art[] memory pendingArts = new Art[](length);
        for (uint256 i = 0; i < length; i++) {
            if (communityArts[_communityId][i].status == 0) {
                pendingArts[i] = communityArts[_communityId][i];
            }
        }
        return pendingArts;
    }

    function upVote(uint256 _communityId, uint256 _artId) public {
        require(
            communityArts[_communityId][_artId].finishTime > block.timestamp,
            "Time Finished"
        );
        require(prendingCheck[prendingId][msg.sender] != true, "A;ready Voted");

        prendingCheck[prendingId][msg.sender] = true;

        communityArts[_communityId][_artId].voteCount += int256(
            communityUsers[_communityId][_msgSender()].communityToken
        );

        arts[_artId].voteCount += int256(
            communityUsers[_communityId][_msgSender()].communityToken
        );
    }

    function downVote(uint256 _communityId, uint256 _artId) public {
        require(
            communityArts[_communityId][_artId].finishTime > block.timestamp,
            "Time Finished"
        );
        require(prendingCheck[prendingId][msg.sender] != true, "A;ready Voted");

        prendingCheck[prendingId][msg.sender] = true;
        communityArts[_communityId][_artId].voteCount -= int256(
            communityUsers[_communityId][_msgSender()].communityToken
        );

        arts[_artId].voteCount -= int256(
            communityUsers[_communityId][_msgSender()].communityToken
        );
    }

    function voteFinished(uint256 _communityId, uint256 _artId) public {
        require(
            communityArts[_communityId][_artId].finishTime < block.timestamp,
            "Time not finished yet Finished"
        );

        communities[_communityId].pendingArts--;

        if (communityArts[_communityId][_artId].voteCount > 0) {
            communityArts[_communityId][_artId].status = 1;
            communityUsers[_communityId][_msgSender()].ArtsCount++;
            communities[_communityId].ArtsCount++;
            arts[_artId].status = 1;
        } else {
            communityArts[_communityId][_artId].status = 2;
            arts[_artId].status = 2;
        }
    }

    function markArtForSell(uint256 _artID, uint256 _comId) external {
        require(
            communityArts[_comId][_artID].owner == msg.sender,
            "Not the owner"
        );

        communityArts[_comId][_artID].mark = true;
        arts[_artID].mark = true;
    }

    function buyArt(uint256 _artID, uint256 _comId) external {
        require(communityArts[_comId][_artID].mark == true, "not for sale");
        require(
            arts[_artID].price <=
                communityUsers[_comId][msg.sender].communityToken,
            "Not enough token"
        );

        uint256 royalty = (communityUsers[_comId][arts[_artID].creator]
            .communityToken * 100) / 10;

        if (arts[_artID].creator != arts[_artID].owner) {
            communityUsers[_comId][arts[_artID].creator]
                .communityToken += royalty;
        }

        arts[_artID].owner = msg.sender;
    }

    function _msgSender() internal view returns (address) {
        return msg.sender;
    }

    function _msgValue() internal view returns (uint256) {
        return msg.value;
    }

    function getArtsLength() internal view returns (uint256) {
        return artId;
    }
}
