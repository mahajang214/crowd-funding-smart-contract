const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("crowdFunding", () => {
  let contract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async () => {
    [owner,addr1,addr2] = await ethers.getSigners();

    const ContractFactory = await ethers.getContractFactory("crowdFunding");
    contract = await ContractFactory.deploy();
    // await contract.deployed(); // Wait until it's mined
    await contract.waitForDeployment();
  });

  it("He is right owner.", async () => {
    expect(await contract.owner()).to.equal(owner.address);
  });

  it("Total funds are working.", async () => {
    expect(await contract.totalFund()).to.equal(0);
  });

  // it("Donation is working.", async () => {
  //   expect(await contract.donate(10)).to.equal(10);
  // });

  // it("Withdrawl is working.",async () => {

  //   expect(await contract.withdrawl(5)).to.equal(5);

  // })
});
