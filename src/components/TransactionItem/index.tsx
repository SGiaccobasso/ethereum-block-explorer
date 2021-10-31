import { TransactionResponse } from '@ethersproject/abstract-provider';
import { FC, useState } from 'react';
import { ethers } from 'ethers';
import PanelRow from '../PanelRow';
import styles from './styles.module.css';

interface Props {
  transactionData: TransactionResponse;
}

const TransactionsList: FC<Props> = ({ transactionData: { value, hash, gasPrice, to, from } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div onClick={() => setIsExpanded(!isExpanded)} className={styles.listItem}>
      <div className={styles.transactionHash}>{hash}</div>
      <div className={isExpanded ? `${styles.expandedContainer} ${styles.expandedShow}` : styles.expandedContainer}>
        <PanelRow title='From'> {from}</PanelRow>
        <PanelRow title='To'> {to}</PanelRow>
        <PanelRow title='Value'> {ethers.utils.formatEther(value)} ETH</PanelRow>
        {gasPrice && <PanelRow title='Gas Price'> {ethers.utils.formatEther(gasPrice)} ETH</PanelRow>}
      </div>
    </div>
  );
};

export default TransactionsList;
