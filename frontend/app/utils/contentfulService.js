import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getContent = async (id) => {
  try {
    const response = await client.getEntry({id});

    return response;
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
    return null;
  }
};
