async function main() {
    const WriteMessage = await ethers.getContractFactory("WriteMessage");
    const writeMessage = await WriteMessage.deploy();
    await writeMessage.deployed();
    console.log("WriteMessage deployed to: ", writeMessage.address);
}
main();