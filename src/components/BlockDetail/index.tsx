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
  const [hasErrorFetching, setHasErrorFetching] = useState(false);

  useEffect(() => {
    // Reset the state when there's a new block to fetch, if blockNumber is 0
    // don't reset, so it doesn't show the loader during the unmount animation.
    if (blockNumber) setBlockData(undefined);
    setHasErrorFetching(false);
    window.provider
      .getBlockWithTransactions(blockNumber)
      .then(data => {
        setBlockData(data);
      })
      .catch(() => setHasErrorFetching(true));
  }, [blockNumber]);

  return (
    <div>
      <div className={blockNumber ? 'modal modal-show' : 'modal modal-hidden'}>
        {blockData ? (
          <div>
            <div className='modal-header'>
              <img src={logo} className='logo-title' alt='ETH' />
              <div className='title-section'>
                <span className='detail-title'>Block {blockData.number}</span>{' '}
                <span className='hash-text'>#{blockData.hash}</span>
              </div>
            </div>
            <TransactionsList transactions={blockData.transactions} />
          </div>
        ) : (
          <div className='status-container'>
            {hasErrorFetching ? <div className='error-message'>Could not fetch block data.</div> : <Loader />}
          </div>
        )}
      </div>
      <div className={blockNumber ? 'bg show' : 'bg'} onClick={onClose} />
    </div>
  );
};

export default BlockDetail;
