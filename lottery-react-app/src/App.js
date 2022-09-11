import { useState, useEffect } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

function App() {
  const [ manager, setManager ] = useState('');
  const [ players, setPlayers ] = useState([]);
  const [ balance, setBalance ] = useState('');
  const [ entryValue, setEntryValue ] = useState('');
  const [ message, setMessage ] = useState('');

  console.log('web3 => ', web3.version);
  web3.eth.getAccounts().then(console.log);
  
  
  const fetchManager = async () => {
    const accountManager = await lottery.methods.manager().call();
    setManager(accountManager);
    // console.log("manager fetched => ", manager);
  }

  const fetchPlayers = async () => {
    const accountPlayers = await lottery.methods.getPlayers().call();
    setPlayers(accountPlayers);
    // console.log("players fetched => ", players);
  }

  const fetchBalance = async () => {
    const accountBalance = await web3.eth.getBalance(lottery.options.address);
    setBalance(accountBalance);
    // console.log("balance fetched => ", accountBalance);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage('Waiting for the transaction to complete ...');
    const accounts = await web3.eth.getAccounts();

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(entryValue, 'ether')
    });
    setMessage('Transaction completed');

  }

  const onClick = async () => {
    const accounts = await web3.eth.getAccounts();
    
    setMessage('Going to pick up a winner ...');
    
    const winner = await lottery.methods.pickWinner().send({
      from: accounts[0]
    })
    console.log("the winner => ", winner);
    setMessage('The winner is picked');

  }

  useEffect(() => {

    fetchManager();
    fetchPlayers();
    fetchBalance();
  }, []);

  return (
    <div className="App">
      <h2>Lotter web3 contract</h2>
      <p>The manager is {manager}</p>
      <p>there are {players.length} players</p>
      <p>and the current balance is {web3.utils.fromWei(balance, 'ether')}</p>
      <hr/>
      <form onSubmit={onSubmit}>
        <h4>Try your luck ?</h4>
        <div>
          <label>Enter the amount in Ether</label>
          <input value={entryValue} onChange={event => setEntryValue(event.target.value)} />
          <button>Enter</button>
        </div>
      </form>
      <hr/>
      <h3>{message}</h3>
      <hr />
      <div>
        <h3>Click to pick up a winner</h3>
        <button onClick={onClick}>Pick a Winner</button>
      </div>
    </div>
  );
}

export default App;
