import Head from 'next/head';
import cloudinary from 'cloudinary';
import Hero from '../src/components/Hero';
import PhotoGallery from '../src/components/PhotoGallery'
import SplitContent from '../src/components/SplitContent';
import { getContent } from '../src/utils/contentfulService.js';

export default function Page({
  content,
  photoGalleryImages,
}) {
  const {
    splitContentSections,
    hero,
  } = content || null;

  console.log({
    photoGalleryImages,
  });

  return (
    <main>
      <Head>
        <title>{content.pageTitle}</title>
      </Head>
      {hero && (
        <Hero
          imagePath={hero.fields.imageName}
          alt={hero.fields.imageAltText}
        />
      )}
      {splitContentSections && splitContentSections.map((splitContentSection) => (
        <SplitContent
          key={splitContentSection.sys.id}
          contentfulData={splitContentSection}
          imageFirst={splitContentSection?.fields?.imageFirst}
        />
      ))}
      <PhotoGallery images={photoGalleryImages} />
    </main>
  );
}

export async function getStaticProps() {
  cloudinary.config({ 
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  // ID for Contentful "Page" entry
  const page = await getContent("3nrYNfkOdzKEeYhCfeLGPt");
  const content = page;

  // TODO get images from Cloudinary
  // need to go through Cloudinary and tag my images for the "gallery"
  // that way I can just grab them all
  const photoGalleryImages = await cloudinary.v2.api.resources_by_tag('gallery', {}).then((res) => {
    const imageArray = res?.resources;

    return imageArray;
  });

  return {
    props: {
      content,
      photoGalleryImages,
    },
  }
}
