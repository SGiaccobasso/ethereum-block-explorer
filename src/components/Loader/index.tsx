import logo from '../../assets/eth-diamond-rainbow.png';
import { FC } from 'react';
import styles from './styles.module.css';

const TransactionsList: FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={logo} className={styles.loader} alt='ETH' />
    </div>
  );
};

export default TransactionsList;
