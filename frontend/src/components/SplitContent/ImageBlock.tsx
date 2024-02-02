import {
  useRef,
  useState,
  useEffect,
} from 'react';
import { CldImage } from "next-cloudinary";
import { getWindowDimensions } from '../../utils/getDimensions';

// TODO should have its own module
import styles from './splitContent.module.scss';

export default function ImageBlock({
  imageSource,
  imageAltText,
}: any) {
  const [imageDimensions, setImageDimensions] = useState({
    height: undefined,
    width: undefined,
  });
  
  const ref: any = useRef(undefined);

  const { width: windowWidth } = getWindowDimensions();

  useEffect(() => {
    const { current }: any = ref;

    setImageDimensions({
      height: current?.clientHeight,
      width: current?.clientWidth,
    });
  }, []);

  return (
    <div
      className={styles.imageWrapper}
      ref={ref}
    >
      {imageDimensions.width && (
        <CldImage
          // check window width before setting image size
          // column size becomes locked after it hits desktop
          width={windowWidth && windowWidth >= 992 ? 610 : windowWidth}
          height={windowWidth && windowWidth >= 992 ? imageDimensions.height : 360}
          crop='fill'
          gravity='center'
          quality="50"
          src={imageSource}
          alt={imageAltText}
        />
      )}
    </div>
  );
}