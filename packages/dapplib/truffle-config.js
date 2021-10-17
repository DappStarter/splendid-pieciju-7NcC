require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remind artwork grace brave fold turkey'; 
let testAccounts = [
"0xd09c387c6f5698d57bfe2e8dd4748421e0715228cef8e2e98eb07ea99afba0d5",
"0x1dac593b6a68d268a722dfbb1bb3316a8cccd41264fc301ceb5c7041abf5c1e4",
"0xceb8e972236d0036b04b2fa72306d035351ccbede3baffd1cdbbe54ba498f8dc",
"0x1479a1e7e86454ed7a7402d41f5d012b3958cf537209921dd533b31c772f834c",
"0x02a8c2523e631a159152c9af841cfa5018730ce410f423da6c96d1e28fe65ccb",
"0x071f8604e01188802a688ddaf0ea199bacb0f6b5f67da733a6ee2be49b060875",
"0x2161b1bcb2346b59ebd4f16851635e288b95a1d83e683d273af4c008cdf32ac3",
"0xee2e6c29ebea18abe5694aa11d5b6ac8acd9f8a7d7a71d72ac1b1c72b3869e6e",
"0x0b4417e552f8ce5a938485ecd47d8c964ea7e6d2cfaf08f71304c12059d3b935",
"0xe27d6a14c27e5847b0065cf84be37fbaba8bd0022e9e7a6c146d15c70c9ed9a5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


