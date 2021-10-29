import { FC } from 'react';
import './styles.css';
import logo from '../../assets/eth-diamond-rainbow.png';

const Block: FC = ({ children }) => {
  return (
    <>
      <div className='container'>
        <img
          src={logo}
          className='logo'
          alt='ETH'
        />
        <div className='col'>
          <div>Block</div>
          <div className='text-container'> #{children}</div>
        </div>
      </div>
    </>
  );
};
export default Block;
