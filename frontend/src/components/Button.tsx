import Link from 'next/link';

import styles from './button.module.scss';

export default function Button({
  children,
  isLink,
  href,
}: any) {
  if (isLink) {
    return (
      <Link
        href={href}
        className={styles.button}
      >{children}</Link>
    )
  }
  return (
    <button type="button">
      {children}
    </button>
  );
};
