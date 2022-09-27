import Web3 from 'web3';

let web3;

if (typeof window !=="undefined" && typeof window.ethereum !== "undefined") {
    // client side
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);   
} else {
    // server side
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/2188fa020e8a4f5d8f0e23ae7ed900e4'
    );
    web3 = new Web3(provider);
}

export default web3;