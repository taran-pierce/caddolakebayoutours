import Image from 'next/image';

import styles from './loading.module.scss';

function Loading() {
  return (
    <Image
      src={`/images/loading.svg`}
      className={styles.rotating}
      width={100}
      height={100}
      alt={`Contacting email server`}
    />
  );
}

export default Loading;
