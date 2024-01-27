import Head from 'next/head';

import Hero from '../src/components/Hero';
import SplitContent from '../src/components/SplitContent';
import { getContent } from '../src/utils/contentfulService.js';

export default function Page({
  content,
}) {
  const {
    splitContentSections,
    hero,
  } = content || null;

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
          contentfulData={splitContentSection}
          imageFirst={splitContentSection?.fields?.imageFirst}
        />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  // ID for Contentful "Page" entry
  const page = await getContent("3plBi1rtQ0qEJSo28TJJso");
  const content = page;

  return { props: { content } }
}
