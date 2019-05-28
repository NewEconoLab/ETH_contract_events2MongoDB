function contractConfig(){
    this.contractInfos = [
        {
            contractName:"Coin2",
            contractHash:"0xd87b2d4a963ab0a136897c8d3a595b75c42d5a68",
            contractABI:[
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "mint",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "send",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "Sent",
                    "type": "event"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "balances",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "minter",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
        },
        {
            contractName:"Coin1",
            contractHash:"0x6572978fc1c84f3c2a1c7f7bcc9ea25fdc7ebb39",
            contractABI:[
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "mint",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "send",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "Sent",
                    "type": "event"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "balances",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "minter",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
        },
        {
            contractName:"Coin0",
            contractHash:"0x6ae2e858e19aad846edc82482402fdc0dfb9856a",
            contractABI:[
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "mint",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "send",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "Sent",
                    "type": "event"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "balances",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "minter",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
        }
    ];
}

module.exports = contractConfig;