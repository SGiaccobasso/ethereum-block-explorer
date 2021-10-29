import logo from '../../assets/eth-diamond-rainbow.png';
import { FC } from 'react';

import './styles.css';

const TransactionsList: FC = () => {
  return (
    <div className='loader-container'>
      <img src={logo} className='loader' alt='ETH' />
    </div>
  );
};

export default TransactionsList;
