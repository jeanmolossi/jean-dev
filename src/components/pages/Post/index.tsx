import { useMemo } from 'react';
import { SpanMarker } from '@components';
import { Post as PostType } from '@interfaces';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Container, ImageContainer, Texts } from './styles';

const Post = ({ title, image, post, user, published_at }: PostType) => {
  const imageData = useMemo(() => image[0], [image]);
  const imageUrl = useMemo(() => `${process.env.NEXT_PUBLIC_API_URL}${imageData.url}`, [imageData]);
  const publishDate = useMemo(() => {
    const parsedDate = parseISO(published_at);
    return format(parsedDate, "dd' de 'MMMM' de 'yyyy' às 'HH:ii", { locale: ptBR })
  }, [published_at])

  const paragraphs = post.split(/(\n\n)+/gim);

  return (
    <Container>
      <SpanMarker>{user.username}</SpanMarker>
      <h1>{title}</h1>
      <small>Publicado {publishDate}</small>
      <ImageContainer>
        <Image
          src={imageUrl}
          width={imageData.formats.large.width}
          height={imageData.formats.large.height}
          layout="responsive"
        />
      </ImageContainer>
      <Texts>
        {paragraphs && paragraphs.map((text, index) => <p key={index.toString()}>{text}</p>)}
      </Texts>
    </Container>
  );
}

export default Post;