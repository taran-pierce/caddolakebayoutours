import ImageGallery from '../components/ImageGallery';
import SingleContent from '../components/SingleContent';

function PhotoGallery() {
  return (
    <>
      <SingleContent />
      <ImageGallery 
        galleryName={`gallery/caddo-lake-`}
        lastSlide={32} 
      />
    </>
  );
}

export async function getStaticProps(context) {
  const canonical = 'https://www.caddolakebayoutours.com/photo-gallery/';
  const pageTitle = 'Photo Gallery - Caddo Lake Bayou Tours';
  const activeTab = 'photo-gallery';
  
  return {
    props: {
      canonical,
      pageTitle,
      activeTab,
    }
  }
}

export default PhotoGallery;
