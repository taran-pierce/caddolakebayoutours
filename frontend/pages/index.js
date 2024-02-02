import { useEffect, useState } from 'react';
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

  console.log({
    hero,
  });

  return (
    <main>
      <Head>
        <title>{content.pageTitle}</title>
        <link rel="canonical" href="https://www.caddolakebayoutours.com/" />
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
    </main>
    );
};

export async function getStaticProps() {
  // ID for Contentful "Page" entry
  const page = await getContent("76HzwUVnG9QIxWD3lK40Rt");
  const content = page;

  return { props: { content } }
}