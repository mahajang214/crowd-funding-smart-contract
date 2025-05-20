const hardhat = require('hardhat')

const main = async () => {
    const contract = await hardhat.getContractFactory('crowdFunding')
    const deploy = await contract.deploy()
    await deploy.deployed()
    console.log('MyContract deployed to:', contract.address)
}

main().catch((e) => {
    console.log('Deployment error: ', e.message)
    process.exitCode = 1
})
