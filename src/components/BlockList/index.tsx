import { FC, useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import './styles.css';
import Block from '../Block';
import BlockDetail from '../BlockDetail';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const BlockList: FC = () => {
  const [selectedBlock, setSelectedBlock] = useState(0);
  const [blockList, setBlockList] = useState<number[]>([]);

  // Create listener to listen for new blocks in the blockchain
  // This will bring the last block created in the first call so there's
  // no need to make a separate request on mount
  const createNewBlocksListener = useCallback(() => {
    provider.on('block', newBlockNum => {
      // Create array with the last 10 block numbers
      const newList = Array.from({ length: 10 }, (_, i) => newBlockNum - i);
      setBlockList(newList);
    });
  }, []);

  useEffect(() => {
    createNewBlocksListener();
  }, [createNewBlocksListener]);

  return (
    <div className='App'>
      <div className='block-list'>
        {selectedBlock !== 0 && <BlockDetail onClose={() => setSelectedBlock(0)} />}
        {blockList.map(blockNumber => (
          <Block key={blockNumber} onClick={() => setSelectedBlock(blockNumber)}>{blockNumber}</Block>
        ))}
      </div>
    </div>
  );
};

export default BlockList;
