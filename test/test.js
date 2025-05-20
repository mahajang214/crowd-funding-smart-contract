const hre = require("hardhat");
const { expect } = require("chai");

describe("crowdFunding", () => {
  let contract;
  let owner;
  let addr1;
  let addr2;
  let maxDonation=hre.ethers.parseEther("100");

  beforeEach(async () => {
    [owner,addr1,addr2] = await hre.ethers.getSigners();

    const ContractFactory = await hre.ethers.getContractFactory("crowdFunding");
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

  it("Should accept a valid donation", async function () {
    const amount = hre.ethers.parseEther("1"); // 1 ETH

    const tx = await contract.connect(addr1).donate(amount, { value: amount });
    await tx.wait();

    const donated = await contract.donations(addr1.address);
    expect(donated).to.equal(amount);

    const total = await contract.totalDonationAmount();
    expect(total).to.equal(amount);
  });


  // it("Withdrawl is working.",async () => {
  //   const amount=hre.ethers.parseEther("5");
  //   expect(await contract.withdrawl(amount,{value:amount})).to.equal(amount);

  // })

  it("Withdrawl is working.", async () => {
    const donateAmount = hre.ethers.parseEther("5");
  
    // addr1 donates first
    await contract.connect(addr1).donate(donateAmount, { value: donateAmount });
  
    // Get initial balance of owner
    const initialBalance = await hre.ethers.provider.getBalance(owner.address);
  
    // Owner withdraws funds from contract
    const tx = await contract.connect(owner).withdrawl(donateAmount);
    const receipt = await tx.wait();
  
    // Estimate gas cost
    const gasUsed = receipt.gasUsed;
    const gasPrice = (await hre.ethers.provider.getTransaction(tx.hash)).gasPrice;
    const gasCost = gasUsed * gasPrice;
  
    const finalBalance = await hre.ethers.provider.getBalance(owner.address);
  
    // Expect owner's balance to increase by amount - gasCost
    expect(finalBalance).to.equal(initialBalance.add(donateAmount).sub(gasCost));
  });
});
