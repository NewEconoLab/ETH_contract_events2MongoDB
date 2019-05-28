const Web3 = require('web3');
var sysConfig = require('./sysConfig');
var contractConfig = require('./contractConfig');
// var c = new dbConfig()
// console.log("mongoDBurl==》" + new dbConfig().mongoDBurl)
var sysConfigInfos = new sysConfig();
var contractInfos = new contractConfig().contractInfos;
// let scriptHash = contractInfos[0].contractHash;
// let CoinABI = contractInfos[0].contractABI;

var express = require('express');
var app = express();

let web3 = new Web3(
    // Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
    new Web3.providers.WebsocketProvider(sysConfigInfos.Web3ProviderURL)
  );

// const contract = new web3.eth.Contract(CoinABI, scriptHash);

const MongoClient = require('mongodb').MongoClient;
var uri = sysConfigInfos.mongoDBurl;

app.get('/', async (req, res) => {
    // res.send(JSON.stringify(await web3.eth.getBlockNumber()))
    res.send(JSON.stringify(await contract.getPastEvents('allEvents',{
        fromBlock: 0,
        toBlock: 'latest'
    })))
});

app.listen(3000, async () => {
    console.log('Example app listening on port 3000!');
    console.log('Connecting ETH ......');
    web3.eth.getBlockNumber((error, result)=>{ 
        if (!error) console.log("getBlockNumber => " + result)
    });
    
    console.log("isSyncing => " + JSON.stringify(await web3.eth.isSyncing()))
    console.log("net.getId => " + await web3.eth.net.getId())
    console.log("net.isListening => " + await web3.eth.net.isListening())
    console.log("net.getPeerCount => " + await web3.eth.net.getPeerCount())

	contractInfos.forEach(contractInfo => {
		storageEvents(contractInfo);
	}); 
});

storageEvents = (contractInfo) =>{
	const contract = new web3.eth.Contract(contractInfo.contractABI, contractInfo.contractHash);
	const scriptHash = contractInfo.contractHash;

	const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(async err =>{
        const db = client.db("ETH_rinkeby_events")
        await db.createCollection(scriptHash);
        const collection = db.collection(scriptHash);

        collection.find({}).sort({'blockNumber':-1}).limit(1).toArray((e,r) => {
            let blockNumberMax = 0;
            if(r.length>0) blockNumberMax = r[0].blockNumber;
            console.log(blockNumberMax);

            contract.getPastEvents('allEvents',
                {
                    fromBlock: blockNumberMax,
                    toBlock: 'latest'
                },
                (e,r) => {
                    mongoInputs(contractInfo, r);
                }
            );
        })

        client.close();
    });

    //   web3.eth.getCode(scriptHash, "latest", (error, result) => {
    //     if (!error) console.log("scriptHash => " + result)
    //   });

    contract.events.allEvents(
        {
        // // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
        // // fromBlock: 0
        }, 
        async (error, event)=>{ 
            if (!error) 
                console.log(JSON.stringify(event));
                console.log(JSON.stringify(event.event)); 
                console.log(JSON.stringify(event.returnValues)); 
                // console.log("0x93A05482d1A316e363230Ac196630D5c22EED0B7 => " + await contract.methods.balances("0x93A05482d1A316e363230Ac196630D5c22EED0B7").call())
                // console.log("0x8f8cd181d5953349f9d13D4e204b16d5ba9Cf323 => " + await contract.methods.balances("0x8f8cd181d5953349f9d13D4e204b16d5ba9Cf323").call())
            
                mongoInputs(contractInfo,[event]);
        }
    )
}

mongoInputs =  (contractInfo,events) =>{
	var Name =  contractInfo.contractName;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(async err =>{
        const collection = client.db("ETH_rinkeby_events").collection(contractInfo.contractHash);
        if(! await collection.indexExists("transactionHash_1")){
            collection.createIndex({transactionHash:1}, { unique: true })
            collection.createIndex({blockNumber:-1}, { unique: false })
            console.log("[" + Name + "]创建索引成功");
        }else{
            console.log("[" + Name + "]索引已存在");
        }

        events.forEach(event => {
            var myobj = JSON.parse(JSON.stringify(event));
            collection.insertOne(myobj, function(err, res) {
                if (err)
                    console.log("[" + Name + "]插入失败或txid重复" + event.blockNumber)
                else
                    console.log("[" + Name + "]文档插入成功");
            });
        });

        // perform actions on the collection object
        client.close();
    })
} 

