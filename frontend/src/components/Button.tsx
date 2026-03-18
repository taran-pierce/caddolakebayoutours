import { ReactNode } from 'react';
import Link from 'next/link';

import styles from './button.module.scss';

type ButtonProps = {
  children: ReactNode;
  isLink?: boolean;
  href?: string;
  externalLink?: boolean;
};

export default function Button({
  children,
  isLink = false,
  href = '',
  externalLink = false,
}: ButtonProps) {
  if (isLink && href) {
    if (externalLink) {
      return (
        <a
          href={href}
          className={styles.button}
          target="_blank"
          rel="noopener"
          data-testid="external-link"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={styles.button}
        data-testid="link"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={styles.button}
      data-testid="button"
    >
      {children}
    </button>
  );
}