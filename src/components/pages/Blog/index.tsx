import { useMemo } from 'react';
import { Post } from '@interfaces';
import { Container, ListPosts } from './styles';
import PostItem from './PostItem';

interface BlogStaticProps {
  posts?: Post[];
}

const Blog = (props: BlogStaticProps) => {
  const { posts } = useMemo(() => props, [props]);
  
  return (
    <Container>
      <ListPosts>
        {posts && posts.map((post: Post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </ListPosts>
    </Container>
  );
}

export default Blog;