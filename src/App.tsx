import React from 'react';
import './App.css';
import { ethers } from 'ethers';
import { useState, useEffect, useCallback } from 'react';

const provider = new ethers.providers.Web3Provider(window.ethereum);

function App() {
  const [latestBlock, setLatestBlock] = useState(0);
  const [blockList, setBlockList] = useState<number[]>([]);

  const createNewBlocksListener = useCallback(() => {
    provider.on('block', newBlockNum => {
      setLatestBlock(newBlockNum);
    });
  }, []);

  useEffect(() => {
    // Create listener to listen for new blocks in the blockchain
    createNewBlocksListener();
  }, [createNewBlocksListener]);

  useEffect(() => {
    if (latestBlock !== 0) {
      // Create array with the last 10 block numbers
      const newList = Array.from({ length: 10 }, (_, i) => latestBlock - i);
      setBlockList(newList);
    }
  }, [latestBlock]);

  return (
    <div className='App'>
      {blockList.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default App;
