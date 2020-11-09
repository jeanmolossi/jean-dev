import { Layout, Post as PostContainer } from '@components';
import { Post as PostType } from '@interfaces';
import StrapiApi from '@utils/api';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

interface PostProps {
  post: PostType; 
}

type QueryProps = {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<QueryProps> = async () => {
  const { data: posts } = await StrapiApi.get<PostType[]>(`/blog-posts?_limit=1`);

  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostProps, QueryProps> = async ({ params }) => {
  if(!params) return {
    props: {
      post: {} as PostType
    },
    revalidate: 30
  }

  const { data: posts } = await StrapiApi.get<PostType[]>(`/blog-posts/?slug=${params.slug}`);
  const post = posts[0];

  return {
    props: {
      post,
    },
    revalidate: 60
  }
}

const Post = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Post">
      <PostContainer {...props.post} />
    </Layout>
  );
}

export default Post;