import {
  useRef,
  useState,
  useEffect,
} from 'react';
import { CldImage } from 'next-cloudinary';
import { useWindowDimensions } from '../../utils/useWindowDimensions';

import styles from './imageBlock.module.scss';

type CldImageProps = React.ComponentProps<typeof CldImage>;

type ImageBlockProps = {
  imageSource: string;
  imageAltText: string;
  enablePriority?: boolean;
  topBorder?: boolean;
  crop?: CldImageProps['crop'];
  gravity?: CldImageProps['gravity'];
  quality?: CldImageProps['quality'];
};

export default function ImageBlock({
  imageSource,
  imageAltText,
  enablePriority,
  topBorder,
  crop = 'auto',
  gravity = 'north',
  quality = 50,
}: ImageBlockProps) {
  const [imageDimensions, setImageDimensions] = useState({
    height: 0,
    width: 0,
  });

  const ref = useRef<HTMLDivElement>(null);
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    const { current } = ref;

    setImageDimensions({
      height: current?.clientHeight || 0,
      width: current?.clientWidth || 0,
    });
  }, []);

  return (
    <div
      className={`${styles.imageWrapper} ${topBorder ? styles.topBorder : ''}`}
      ref={ref}
    >
      {imageDimensions.width > 0 && (
        <CldImage
          width={windowWidth && windowWidth >= 992 ? 610 : windowWidth}
          height={windowWidth && windowWidth >= 992 ? imageDimensions.height : 360}
          crop={crop}
          gravity={gravity}
          quality={quality}
          priority={enablePriority}
          src={imageSource}
          alt={imageAltText}
        />
      )}
    </div>
  );
}