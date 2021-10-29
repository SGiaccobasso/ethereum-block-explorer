import { TransactionResponse } from '@ethersproject/abstract-provider';
import { FC } from 'react';

import './styles.css';

interface Props {
  transactions: TransactionResponse[];
}

const TransactionsList: FC<Props> = ({ transactions }) => {
  return (
    <ul>
      {transactions.map(item => (
        <li key={item.hash}>{item.hash}</li>
      ))}
    </ul>
  );
};

export default TransactionsList;
