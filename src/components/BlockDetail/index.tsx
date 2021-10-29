import { BlockWithTransactions } from '@ethersproject/abstract-provider';
import { FC, useEffect, useState } from 'react';
import './styles.css';

interface Props {
  onClose: () => void;
  blockNumber: number;
}

const BlockDetail: FC<Props> = ({ children, onClose, blockNumber }) => {
  const [blockData, setBlockData] = useState<BlockWithTransactions>();

  useEffect(() => {
    window.provider.getBlockWithTransactions(blockNumber).then(data => {
      setBlockData(data);
    });
  }, [blockNumber]);
  
  return (
    <div>
      <div className='modal'>
        {blockData && blockData.hash}
        {children}
      </div>
      <div className='bg' onClick={onClose} />
    </div>
  );
};

export default BlockDetail;
