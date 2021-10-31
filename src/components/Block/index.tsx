import { FC } from 'react';
import styles from './styles.module.css';
import logo from '../../assets/eth-diamond-rainbow.png';

interface Props {
  onClick: (e: React.MouseEvent) => void;
}

const Block: FC<Props> = ({ children, onClick }) => {
  return (
    <div className={styles.container} onClick={e => onClick(e)}>
      <img src={logo} className={styles.logo} alt='ETH' />
      <div className={styles.textContainer}>
        <div className={styles.title}>Block</div>
        <div>#{children}</div>
      </div>
    </div>
  );
};

export default Block;
