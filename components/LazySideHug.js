import React, {useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import TextBlock from './TextBlock'
import {
  Image,
  CloudinaryContext,
  Transformation,
} from 'cloudinary-react'

import './sideHug.scss'

const SideHug = ( props ) => {
  const {
    imageFirst,
    textData,
    image,
    googleMap,
  } = props.data

  const imageColumnRef = useRef(null);

  const [imageColumnWidth, setImageColumnWidth] = useState(585);
  const [imageColumnHeight, setImageColumnHeight] = useState(661);

  useEffect(() => {
    const {
      width,
      height,
    } = imageColumnRef?.current?.getBoundingClientRect();

    setImageColumnWidth(width);
    setImageColumnHeight(height);
  }, []);

  return (
    <section className={`side-hug`}>
      <div className={`container flex`}>
        <div className={`col`}>
          {imageFirst ?
            (
              // display google map if we have one
              googleMap && (
              <div>{googleMap}</div>
              ),

              // display image if we have one
              image && (
                <CloudinaryContext cloudName="tpierce36">
                  <div className={`img-wrapper`} ref={imageColumnRef}>
                    <Image
                      publicId={image.path}
                      responsive
                      width={imageColumnWidth}
                      crop={`scale`}
                      alt={image.alt}
                      loading={`lazy`}
                    >
                      <Transformation
                        quality={`auto`}
                        fetchFormat={`auto`}
                      />
                    </Image>
                  </div>
                </CloudinaryContext>
              )
            ) : (
              textData.map( (text, index) => (
                <TextBlock key={index} data={text} />
              ))
            )
          }
        </div>
        <div className={`col`}>
          {imageFirst ?
            (
              textData.map( (text, index) => (
                <TextBlock key={index} data={text} />
              ))
            ) : (
              // display image if we have one
              image && (
                <CloudinaryContext cloudName="tpierce36">
                  <div className={`img-wrapper`} ref={imageColumnRef}>
                    <Image
                      publicId={image.path}
                      responsive
                      width={imageColumnWidth}
                      crop={`scale`}
                      alt={image.alt}
                      loading={`lazy`}
                      >
                      <Transformation
                        quality={`auto`}
                        fetchFormat={`auto`}
                      />
                    </Image>
                  </div>
                </CloudinaryContext>
              )
            )
          }
          {googleMap && (
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632"
              width="100%"
              height="460"
              frameBorder="0"
              allowFullScreen
              importance="low"
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  )
}

SideHug.propTypes = {
  data: PropTypes.object,
}

export default SideHug