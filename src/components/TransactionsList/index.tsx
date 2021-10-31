import { TransactionResponse } from '@ethersproject/abstract-provider';
import { FC } from 'react';
import TransactionItem from '../TransactionItem';
import styles from './styles.module.css';

interface Props {
  transactions: TransactionResponse[];
}

const TransactionsList: FC<Props> = ({ transactions }) => {
  return (
    <div className={styles.listContainer}>
      {transactions.map(item => (
        <TransactionItem key={item.hash} transactionData={item}></TransactionItem>
      ))}
    </div>
  );
};

export default TransactionsList;
