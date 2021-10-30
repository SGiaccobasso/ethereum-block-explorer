import { TransactionResponse } from '@ethersproject/abstract-provider';
import { FC } from 'react';
import TransactionItem from '../TransactionItem';
import './styles.css';

interface Props {
  transactions: TransactionResponse[];
}

const TransactionsList: FC<Props> = ({ transactions }) => {
  return (
    <div className='list-container'>
      {transactions.map(item => (
        <TransactionItem key={item.hash} transactionData={item}></TransactionItem>
      ))}
    </div>
  );
};

export default TransactionsList;
