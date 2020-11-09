import { Layout, Blog as BlogPart } from '@components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import StrapiApi from '@utils/api';
import { Post } from '@interfaces';
import { useMemo } from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts } = await StrapiApi.get<Post[]>(`${process.env.NEXT_PUBLIC_API_URL}/blog-posts`);

  return {
    props: {
      posts
    }
  }
}

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { posts } = useMemo(() => props, [props]);
  
  return (
    <Layout title="Blog">
      <BlogPart posts={posts} />
    </Layout>
  );
}

export default Blog;