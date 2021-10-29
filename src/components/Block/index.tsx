import { FC } from 'react';
import './styles.css';
import logo from '../../assets/eth-diamond-rainbow.png';

interface Props {
  onClick: (e: React.MouseEvent) => void;
}

const Block: FC<Props> = ({ children, onClick }) => {
  return (
    <div className='container' onClick={e => onClick(e)}>
      <img src={logo} className='logo' alt='ETH' />
      <div className='text-container'>
        <div className='title'>Block</div>
        <div>#{children}</div>
      </div>
    </div>
  );
};

export default Block;
