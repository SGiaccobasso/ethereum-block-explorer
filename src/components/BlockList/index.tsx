import { FC, useState, useEffect, useCallback } from 'react';
import './styles.css';
import Block from '../Block';
import BlockDetail from '../BlockDetail';

const BlockList: FC = () => {
  const [selectedBlock, setSelectedBlock] = useState(0);
  const [blockList, setBlockList] = useState<number[]>([]);

  // Create listener to listen for new blocks in the blockchain
  // This will bring the last block created in the first call so there's
  // no need to make a separate request on mount
  const createNewBlocksListener = useCallback(() => {
    window.provider.on('block', newBlockNum => {
      // Create array with the last 10 block numbers
      const newList = Array.from({ length: 10 }, (_, i) => newBlockNum - i);
      setBlockList(newList);
    });
  }, []);

  useEffect(() => createNewBlocksListener(), [createNewBlocksListener]);

  return (
    <div className='block-list'>
      <BlockDetail onClose={() => setSelectedBlock(0)} blockNumber={selectedBlock} />
      {blockList.map(blockNumber => (
        <Block key={blockNumber} onClick={() => setSelectedBlock(blockNumber)}>
          {blockNumber}
        </Block>
      ))}
    </div>
  );
};

export default BlockList;
