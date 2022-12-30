async function main() {
    const DiamondProxy = await ethers.getContractFactory("DiamondProxy");
    const diamondProxy = await DiamondProxy.deploy();
    await diamondProxy.deployed();
    console.log("DiamondProxy deployed to: ", diamondProxy.address);
}
main();