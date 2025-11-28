import { CldImage } from 'next-cloudinary';
import styles from './hero.module.scss';

export default function Hero({
  imagePath,
  alt,
}: {
  imagePath: string;
  alt: string;
}) {
  // Set max expected dimensions for desktop layout
  const width = 960; // matches your CSS max-width
  const height = 340; // matches your CSS height

  return (
    <section className={styles.hero} data-testid="hero">
      <CldImage
        src={imagePath}
        alt={alt}
        width={width}
        height={height}
        crop="fill"
        gravity="center"
        quality="50"
        format="webp"
        priority
        className={styles.heroImage}
      />
    </section>
  );
}
