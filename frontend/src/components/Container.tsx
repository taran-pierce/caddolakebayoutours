import styles from './container.module.scss';

export default function Container({ children, borderBottom }: any) {
  return (
    <div className={`${styles.container} ${borderBottom ? styles.borderBottom : ''}`}>
      {children}
    </div>
  );
};
