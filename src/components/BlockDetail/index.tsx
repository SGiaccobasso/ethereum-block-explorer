import { BlockWithTransactions } from '@ethersproject/abstract-provider';
import { FC, useEffect, useState } from 'react';
import styles from './styles.module.css';
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
      <div className={blockNumber ? `${styles.modal} ${styles.modalShow}` : `${styles.modal} ${styles.modalHidden}`}>
        {blockData ? (
          <div>
            <div className={styles.modalHeader}>
              <img src={logo} className={styles.logoTitle} alt='ETH' />
              <div className={styles.titleSection}>
                <span className={styles.detailTitle}>Block {blockData.number}</span>{' '}
                <span className={styles.hashText}>#{blockData.hash}</span>
              </div>
            </div>
            <TransactionsList transactions={blockData.transactions} />
          </div>
        ) : (
          <div className={styles.statusContainer}>
            {hasErrorFetching ? <div className={styles.errorMessage}>Could not fetch block data.</div> : <Loader />}
          </div>
        )}
      </div>
      <div className={blockNumber ? `${styles.bg} ${styles.show}` : styles.bg} onClick={onClose} />
    </div>
  );
};

export default BlockDetail;
