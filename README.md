# diamondproxy-hardhat
+ install the dependencies: npm install
+ compile the smart contracts: npx hardhat compile
+ deploy DiamondProxy: npx hardhat run scripts/deploy_diamondproxy.js --network testnet
+ verify DiamondProxy: npx hardhat verify  --contract contracts/DiamondProxy.sol:DiamondProxy  --network testnet {address of DiamondProxy}
+ deploy ReadMessage: npx hardhat run scripts/deploy_readmessage.js --network testnet
+ verify ReadMessage: npx hardhat verify  --contract contracts/ReadMessage.sol:ReadMessage  --network testnet {address of ReadMessage}
+ deploy WriteMessage: npx hardhat run scripts/deploy_writemessage.js --network testnet
+ verify WriteMessage: npx hardhat verify  --contract contracts/WriteMessage.sol:WriteMessage  --network testnet {address of WriteMessage}
+ deploy AppendMessage: npx hardhat run scripts/deploy_appendmessage.js --network testnet
+ verify AppendMessage: npx hardhat verify  --contract contracts/AppendMessage.sol:AppendMessage  --network testnet {address of Appendessage}
+ go to https://louper.dev/ to setup the proxy and add the facets


A sample of deployed addresses: 
DiamondProxy:   0x5ca8626EC4009341298A68025727202F198a81f7
ReadMessage:    0x20363a9C8C2Fc7e90f2ff00cd8980b6658174164
WriteMessage:   0x03BC393F45BebA1e85f1F7d894B83Ed4CD22e9c6
AppendMessage:  0x4E46B42265a47b745Dc1792209CF5580159b503F