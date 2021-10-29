import { BlockWithTransactions } from '@ethersproject/abstract-provider';
import { FC, useEffect, useState } from 'react';
import './styles.css';
import TransactionsList from '../TransactionsList';
import Loader from '../Loader';
import logo from '../../assets/eth-diamond-rainbow.png';

interface Props {
  onClose: () => void;
  blockNumber: number;
}

const BlockDetail: FC<Props> = ({ onClose, blockNumber }) => {
  const [blockData, setBlockData] = useState<BlockWithTransactions>();

  useEffect(() => {
    window.provider.getBlockWithTransactions(blockNumber).then(data => {
      setBlockData(data);
    });
  }, [blockNumber]);

  return (
    <div>
      <div className='modal'>
        {blockData ? (
          <div>
            <div className='modal-header'>
              <img src={logo} className='logo-title' alt='ETH' />
              <div className='title-section'>
                <span className='title'>Block</span> {blockData.number} #{blockData.hash}
              </div>
            </div>
            <div className='list-container'>
              <TransactionsList transactions={blockData.transactions} />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <div className='bg' onClick={onClose} />
    </div>
  );
};

export default BlockDetail;
