async function main() {
    const ReadMessage = await ethers.getContractFactory("ReadMessage");
    const readMessage = await ReadMessage.deploy();
    await readMessage.deployed();
    console.log("ReadMessage deployed to: ", readMessage.address);
}
main();