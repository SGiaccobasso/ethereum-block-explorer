import { FC } from 'react';
import './styles.css';

interface Props {
  title: string;
}

const PanelRow: FC<Props> = ({ title, children }) => (
  <div className='panel-row'>
    <span className='panel-title'>{title}:</span> {children}
  </div>
);

export default PanelRow;
