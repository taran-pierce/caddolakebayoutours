import Head from 'next/head';
import cloudinary from 'cloudinary';
import PhotoGallery from '../components/PhotoGallery';
import SplitContent from '../components/SplitContent';
import { getContent } from '../utils/contentfulService.js';

export default function Page({ content, photoGalleryImages }) {
  const { splitContentSections } = content || {};

  return (
    <main>
      <Head>
        <title>{content.pageTitle}</title>
        <link rel="canonical" href="https://www.caddolakebayoutours.com/photo-gallery" />
      </Head>

      {splitContentSections?.map((section) => (
        <SplitContent
          key={section.sys.id}
          contentfulData={section}
          imageFirst={section?.fields?.imageFirst}
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

  const page = await getContent("3nrYNfkOdzKEeYhCfeLGPt");
  const content = page;

  // fetch images from Cloudinary tagged 'benton-downs-gallery'
  const photoGalleryImages = await cloudinary.v2.api.resources_by_tag('benton-downs-gallery', {
    max_results: 100,
  }).then((res) => res?.resources || []);

  return {
    props: { content, photoGalleryImages },
  };
}