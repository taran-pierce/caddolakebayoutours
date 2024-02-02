import Page from '../../pages/index';
import { getContent } from '../utils/contentfulService.js';

export default function DefaultPage({ content }: any) {
  return <Page content={content} />
};

export async function getStaticProps() {
  // ID for Contentful "Page" entry
  const page = await getContent("76HzwUVnG9QIxWD3lK40Rt");
  const content = page;

  return { props: { content } }
}
