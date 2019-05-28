# ETH Contract Events to MongoDB

Real-time ETH contract events (including historical) into the library mongodb

## init & starts

```bash
npm install (yarn)
node app.js
```

## set Sys Info

sysConfig.js

## set Contract Info

contractConfig.js

## get Infos

<http://localhost:3000/>

```json
{
    contractWatch: [
        {
            contractName: "Coin2",
            contractHash: "0xd87b2d4a963ab0a136897c8d3a595b75c42d5a68"
        },
        {
            contractName: "Coin1",
            contractHash: "0x6572978fc1c84f3c2a1c7f7bcc9ea25fdc7ebb39"
        },
        {
            contractName: "Coin0",
            contractHash: "0x6ae2e858e19aad846edc82482402fdc0dfb9856a"
        }
    ],
    web3Providers: "ws://127.0.0.1:8546",
    getBlockNumber: 4459710,
    isSyncing: false,
    net.getId: 4,
    netIsListening: true,
    netGetPeerCount: 100
}
```