import { FC } from 'react';
import './styles.css';

interface Props {
  onClose: () => void;
}

const BlockDetail: FC<Props> = ({ children, onClose }) => {
  return (
    <div>
      <div className='modal'>{children}</div>
      <div className='bg' onClick={onClose} />
    </div>
  );
};

export default BlockDetail;
