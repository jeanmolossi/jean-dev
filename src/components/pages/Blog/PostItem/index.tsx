import { SpanMarker } from '@components';
import { Post } from '@interfaces';
import Image from 'next/image';
import { useMemo } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import { Container, ImageContainer, ExcerptContainer } from './styles';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface PostItemProps extends Post {}

const PostItem = (props: PostItemProps) => {
  const { title, image, post, user, published_at, slug } = useMemo(() => props, [props]);

  const [postImage] = image;

  const imageUrl = useMemo(() => `${process.env.NEXT_PUBLIC_API_URL}${postImage.url}`, [postImage.url]);
  const excerpt = useMemo(() => `${post.substr(0, 300)}...`, [post])
  const wasPublishedIn = useMemo(() => {
    const parsedDate = parseISO(published_at);
    return formatDistance(parsedDate, new Date(), {
      addSuffix: true,
      locale: ptBR
    })
  }, [published_at]);

  return (
    <Container>
      <ImageContainer>
        <Link href={`/post/[slug]`} as={`/post/${slug}`}>
          <a>
            <Image
              src={imageUrl}
              width={postImage.formats.thumbnail.width}
              height={postImage.formats.thumbnail.height}
              layout="responsive"
              loading="lazy"
            />
          </a>
        </Link>
      </ImageContainer>

      <ExcerptContainer>        
        <SpanMarker>{user.username}</SpanMarker>
        <h1>
          <Link href={`/post/[slug]`} as={`/post/${slug}`}>
            <a>
              {title}
            </a>
          </Link>
        </h1>
        <small>{wasPublishedIn}</small>
        <p>{excerpt}</p>

        <Link href={`/post/[slug]`} as={`/post/${slug}`}><a>Continuar lendo <FiArrowRight /></a></Link>
      </ExcerptContainer>
    </Container>
  );
}

export default PostItem;