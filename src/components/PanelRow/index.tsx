import { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  title: string;
}

const PanelRow: FC<Props> = ({ title, children }) => (
  <div className={styles.panelRow}>
    <span className={styles.panelTitle}>{title}:</span> {children}
  </div>
);

export default PanelRow;
