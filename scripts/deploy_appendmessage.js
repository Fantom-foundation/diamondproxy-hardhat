async function main() {
    const AppendMessage = await ethers.getContractFactory("AppendMessage");
    const appendMessage = await AppendMessage.deploy();
    await appendMessage.deployed();
    console.log("AppendMessage deployed to: ", appendMessage.address);
}
main();