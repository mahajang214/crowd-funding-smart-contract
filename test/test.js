const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("crowdFunding", () => {
  let contract;
  let owner;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();

    const ContractFactory = await ethers.getContractFactory("crowdFunding");
    contract = await ContractFactory.deploy();
    await contract.deployed(); // Wait until it's mined
  });

  it("Should set the right owner", async () => {
    expect(await contract.owner()).to.equal(owner.address);
  });
});


// const { ethers } = require("hardhat"); // ✅ use Hardhat's ethers
// const { expect } = require("chai");

// describe("crowdFunding", () => {
//   let contract;
//   let owner;

//   beforeEach(async () => {
//     [owner] = await ethers.getSigners();
//     // console.log("owner: ",owner);
//     const contractFactory = await ethers.getContractFactory("crowdFunding");
//     // contract = await contractFactory.deploy();
//     // await contract.deployed();
//     contract = await contractFactory.deploy();
//     await contract.deployed();
//      // ✅ deploy from factory
//     // console.log("contract : ",contract);
//     // await contract.deployed(); // ✅ now this works
//   });

//   it("Check owner", async () => {
//     // Compare to the actual owner from contract storage, if it exists
//     // Assuming your contract has a public `owner` variable:
//     expect(await contract.owner()).to.equal(owner.address);
//   });
// });

// const {ethers}=require("hardhat");
// const {expect}=require("chai");

// describe("crowdFunding", ()=>{
// let contract;
// let owner;

// beforeEach(async()=>{
// // [owner]=await ethers.getSigners();
// [owner] = await ethers.getSigners();
// const contractFactory=await ethers.getContractFactory("crowdFunding");
// contract = await contractFactory.deploy();
// await contract.deployed();

// });

// it("Check owner", async()=>{
// expect(contract.address).to.equal(owner.address);
// });

// });
