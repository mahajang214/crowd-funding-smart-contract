//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract crowdFunding {
    uint256 public constant NEEDDONATIONS=10 ether;
    uint256 public totalDonationAmount=0 ether;
    mapping (address=>uint256) public donations;
    address public owner;

    constructor() {
        owner=msg.sender;
    }

    //Donate fund with condition donationAmount+totalDonationAmount<=NEEDDONATION
    function donate(uint256 donationAmount) external payable{
        if(totalDonationAmount>=NEEDDONATIONS){
            return ;
        }
        require(address(this).balance>=msg.value,"Insufficient amount");
        require(msg.value+totalDonationAmount<=NEEDDONATIONS,"Donate limit reached");
        donations[msg.sender] += donationAmount;
        // payable (msg.sender).transfer(donationAmount);
        totalDonationAmount+=donationAmount;
        

    }

//     function donate() external payable {
//     require(totalDonationAmount < NEEDDONATIONS, "Donation Goal reached");
//     require(totalDonationAmount + msg.value <= NEEDDONATIONS, "Exceeds goal");

//     // effects
//     donations[msg.sender] += msg.value;
//     totalDonationAmount   += msg.value;

//     // interactions: none (we keep the donation)
// }

    
    //Check total donations
    function totalFund() public onlyOwner view returns (uint256)   {
        return totalDonationAmount;
    }

    //Withdrawl fund
    function withdrawl(uint256 donationAmount ) public onlyOwner returns (uint256){
        require(totalDonationAmount>donationAmount,"Insufficient amount to withdrawl");
        donations[msg.sender] -= donationAmount;
        payable (msg.sender).transfer(donationAmount); 
        
        return totalDonationAmount-=donationAmount;  
    }


     /* ---------------- modifier ---------------- */
    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorized operaton");
        _;
    }
}
