//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract crowdFunding {
    uint256 public maxDonation = 10 ether;
    uint256 public totalDonationAmount = 0 ether;
    mapping(address => uint256) public donations;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    //Donate fund with condition donationAmount+totalDonationAmount<=maxDonation
    function donate(uint256 donationAmount) external payable returns (uint256) {
        if (totalDonationAmount >= maxDonation) {
            return 0;
        } else {
            require(address(this).balance >= msg.value, "Insufficient amount");
            require(
                msg.value + totalDonationAmount <= maxDonation,
                "Donate limit reached"
            );
            donations[msg.sender] += donationAmount;
            // payable (msg.sender).transfer(donationAmount);
            totalDonationAmount += donationAmount;
            return donationAmount;
        }
    }

    //Check total donations
    function totalFund() public view returns (uint256) {
        return totalDonationAmount;
    }

    //Withdrawl fund
    function withdrawl(uint256 donationAmount) public payable returns (uint256) {
        require(
            totalDonationAmount > donationAmount,
            "Insufficient amount to withdrawl"
        );
        donations[msg.sender] -= donationAmount;
        payable(msg.sender).transfer(donationAmount);

        return totalDonationAmount -= donationAmount;
    }

    /* ---------------- modifier ---------------- */
    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorized operation");
        _;
    }
}
