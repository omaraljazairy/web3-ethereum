// SPDX-License-Identifier: MIT

pragma solidity  ^0.8.9;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}

/**
every contract has by default a msg instance object that contains 4 properties
- msg.data: Data field from the call or transaction that invoked the current function.
- msg.gas: Amount of gas the current function invocation has available.
- msg.sender: Address of the account that started the current function.
- msg.value: Amount of Wei that was sent along with the function invocation.
- msg.sig: First four bytes of the calldata (i.e. function identifier).

==========
arrays:
-------
- fixed array: single type of elements, unchaged length. int[3] -> [1,2,3]
- dynamic array: single type of elements, dynamic size. int[] -> [1,2,3]

*/