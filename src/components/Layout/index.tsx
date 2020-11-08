import { ReactNode, useCallback, useMemo, useState } from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitch } from 'react-icons/fa';
import Link from 'next/link'
import GlobalStyle from '@assets/GlobalStyle';
import { Container, Header, Footer } from './styles';
import { FiMenu, FiX } from 'react-icons/fi';
import HeadWithSeo from '../HeadWithSeo';

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

const Layout = ({
  children,
  title = 'Conteúdo para desenvolvedores',
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pageTitle = useMemo(() => {
    return shouldExcludeTitleSuffix ? title : `${title} | Jean Dev`;
  }, [title]);

  const metaImage = useMemo(() => {
    return image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}` : undefined;
  }, [image]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(oldState => !oldState)
  }, []);

  return (
    <Container>
      <HeadWithSeo
        metaImage={metaImage}
        description={description}
        pageTitle={pageTitle}
        shouldIndexPage={shouldIndexPage}
      />
            
      <GlobalStyle />
      <Header>
        <h1>
          <Link href="/"><a>JeanDev</a></Link>
        </h1>

        <button onClick={toggleMenu} className="menu-button">
          {!isMenuOpen ? <FiMenu /> : <FiX />}
        </button>

        <nav className={isMenuOpen ? `opened` : 'closed'}>
          <Link href="/"><a>Início</a></Link>
          <Link href="/sobre-mim"><a>Sobre mim</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
        </nav>
      </Header>
      {children}
      <Footer>
        <div>
          <h1>JeanDev</h1>
          <p>Vá adiante, aprenda, empreenda, programe!</p>
        </div>
  
        <div>
          <div>
            <h3>Mais do site</h3>
            <Link href="/"><a>Blog</a></Link>
            <Link href="/"><a>Sobre mim</a></Link>
          </div>
          <div>
            <h3>Mais sobre o Dev</h3>
            <Link href="https://github.com/jeanmolossi" passHref>
              <a target="_blank"><FaGithub /> Github</a>
            </Link>
            
            <Link href="https://instragram.com/jeancarlosmolossi" passHref>
              <a target="_blank"><FaInstagram /> Instagram</a>
            </Link>
            
            <Link href="https://www.linkedin.com/in/jean-carlos-molossi-512098126/" passHref>
              <a target="_blank"><FaLinkedin /> LinkedIn</a>
            </Link>
            
            <Link href="https://twitch.com/jeanmolossi" passHref>
              <a target="_blank"><FaTwitch /> Twitch</a>
            </Link>
            
          </div>
        </div>
      </Footer>
    </Container>
  )
}

export default Layout
