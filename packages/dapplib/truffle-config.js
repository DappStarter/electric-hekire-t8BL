require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember arrow hidden entire off gift'; 
let testAccounts = [
"0x051b432ab98d42995af53657defcb31684e7c50ae8e0674e146e61b0731e4637",
"0x24dce20ebb2e9600482159e1626d4d6e8f40caf3d41c5a5e720b194fe1b13b13",
"0x833f44a48339e00e5fa53cac00447b4e3635b9ee5ea459b937f3d2b99bbd3e52",
"0x9b01cd71e99fed40dd5a03ed8a838be2709bd0883ca7742c6694d8477193b804",
"0x75c425c9efd7f53297824d27d2a3d2066f03924f1bb1d36b3ef86138582ce6f9",
"0x0a1de6d3a415623bf11b0d9fec8d9b1a381e093adb804733646a53040f32e583",
"0x6789c08cb2f038f6ee2e7826bbd82fceed35f21e518735589e12983fbe964f4d",
"0x7facb68fa55b0dcd3cbb33a3b9ddc84afad0dbcd699bc7dc0beebb4658ca2393",
"0xade081f70fe1f9df3fd8be2b3f2b58e71be1265e34f5c1ba493960c2cbefa0ca",
"0xb0cc68eaa2438452c59ceeb0352aa16ffa7070c06a0c24203b09ae16a5bbc25b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

