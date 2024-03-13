import styles from './container.module.scss';

export default function Container({
  children,
  borderBottom,
  borderTop,
}: {
  children: any,
  borderBottom?: boolean,
  borderTop?: boolean,
}) {
  return (
    <div
      className={`${styles.container} ${borderBottom ? styles.borderBottom : ''} ${borderTop ? styles.borderTop : ''}`}
      data-testid='container'
    >
      {children}
    </div>
  );
};
