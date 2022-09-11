// standard module
const path = require('path'); // build a path, cross platform compatibility
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
// read the file
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'inbox.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

// compile and export the Inbox object
// module.exports = solc.compile(source, 1).contracts[':Inbox'];
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['inbox.sol'].Inbox;