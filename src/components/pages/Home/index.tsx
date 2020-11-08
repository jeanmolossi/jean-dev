import { useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import { useTransform, useViewportScroll } from 'framer-motion';
import { Container, CurrentPart, Part, Content, HeroUnit, GetStarted, DevEssentials, YourObjecttive } from './styles';
import { SpanMarker } from '@components';

const Home = () => {
  const getStartedRef = useRef<HTMLDivElement>(null);
  const devEssentialsRef = useRef<HTMLDivElement>(null);
  const yourObjectiveRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useViewportScroll();

  const opacity00 = useTransform(scrollYProgress, [0.00, 0.25], [1.0, 0.5])
  const opacity01 = useTransform(scrollYProgress, [0.00, 0.25, 0.50, 0.65], [0.5, 1, 1, 0.5])
  const opacity02 = useTransform(scrollYProgress, [0.25, 0.50, 0.75, 0.90], [0.5, 1, 1, 0.5])
  const opacity03 = useTransform(scrollYProgress, [0.75, 0.90, 1.00],       [0.5, 1, 0.5])

  const scrollTo = useCallback((offset: number) => {
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }, []);

  const gotoHeroUnit = useCallback(() => {
    scrollTo(0);
  }, [scrollTo]);

  const gotoStart = useCallback(() => {
    if(getStartedRef.current) 
      scrollTo(getStartedRef.current.offsetTop)
  }, [scrollTo]);

  const gotoDevEssentials = useCallback(() => {
    if(devEssentialsRef.current)
      scrollTo(devEssentialsRef.current.offsetTop)
  }, [scrollTo]);

  const gotoYourObjetives = useCallback(() => {
    if(yourObjectiveRef.current)
      scrollTo(yourObjectiveRef.current.offsetTop)
  }, [scrollTo]);

  return (
    <Container className="sky-bg">
      <Content>
        <HeroUnit>
          <SpanMarker>A Dev Guide</SpanMarker>
          <h1>Esteja preparado para o mundo e além!</h1>
          <small>Scroll down <FiArrowDown /></small>
        </HeroUnit>

        <GetStarted ref={getStartedRef}>
          <div>
            <SpanMarker>Primeiros passos</SpanMarker>
            <h1>Qual o caminho para ser um Dev web?</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui culpa alias voluptate iure quidem vitae aut assumenda blanditiis cum exercitationem aliquid dolorem quia ea hic, laudantium nobis autem libero ratione!
            </p>
            <Link href="/blog"><a>Ler mais <FiArrowRight /></a></Link>
          </div>
          <div>
            <Image
              src="/code-01.jpg"
              layout="responsive"
              width={1920}
              height={1271}
              loading="lazy"
            />
          </div>
        </GetStarted>

        <DevEssentials ref={devEssentialsRef}>
          <div>
            <SpanMarker>Habilidades essenciais</SpanMarker>
            <h1>O que é preciso para me tornar um bom Dev Web?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore non magnam vel ipsam, adipisci delectus! Officiis ipsam voluptatum delectus. Mollitia quasi id reprehenderit sapiente fuga ab ex tempora laborum?</p>
            <Link href="/blog"><a>Ler mais <FiArrowRight /></a></Link>
          </div>
          <div>
            <Image
              src="/code-01.jpg"
              layout="responsive"
              width={1920}
              height={1271}
              loading="lazy"
            />
          </div>
        </DevEssentials>

        <YourObjecttive ref={yourObjectiveRef}>
          <div>
            <SpanMarker>O seu objetivo é a chave</SpanMarker>
            <h1>Para meus objetivos isso serve ?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore non magnam vel ipsam, adipisci delectus! Officiis ipsam voluptatum delectus. Mollitia quasi id reprehenderit sapiente fuga ab ex tempora laborum?</p>
            <Link href="/blog"><a>Ler mais <FiArrowRight /></a></Link>
          </div>
          <div>
            <Image
              src="/code-01.jpg"
              layout="responsive"
              width={1920}
              height={1271}
              loading="lazy"
            />
          </div>
        </YourObjecttive>

      </Content>
      <CurrentPart>
        <Part onClick={gotoHeroUnit} style={{ opacity: opacity00 }}>Start</Part>
        <Part onClick={gotoStart} style={{ opacity: opacity01 }}>01</Part>
        <Part onClick={gotoDevEssentials} style={{ opacity: opacity02 }}>02</Part>
        <Part onClick={gotoYourObjetives} style={{ opacity: opacity03 }}>03</Part>
      </CurrentPart>
    </Container>
  );
}

export default Home;