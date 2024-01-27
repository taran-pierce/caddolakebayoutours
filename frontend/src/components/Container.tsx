import styles from './container.module.scss';

export default function Container({
  children,
  borderBottom,
  borderTop,
}: any) {
  return (
    <div
      className={`${styles.container} ${borderBottom ? styles.borderBottom : ''} ${borderTop ? styles.borderTop : ''}`}
    >
      {children}
    </div>
  );
};
