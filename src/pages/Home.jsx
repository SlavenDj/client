import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import Vesti from '../components/Vesti';

import team_img_2 from '../imgs/teams_imgs_2.png';
import Section from '../Section';
import { bavimoSe } from '../App';
import { Footer } from '../Footer';

export const Home = () => (
  <>
    <HeroSection />
    <Vesti />
    <Section
      title='Mi smo'
      content={
        <>
          <img
            src={team_img_2}
            alt=''
            className='about_us__img'
            loading='lazy'
          />
          <div className='about_us__content'>
            <p className='about_us__p'>
              Naša vizija jeste stvoriti okruženje koje podstiče rast i u kojem
              je potencijal mladih u potpunosti iskorišten i prepoznat, te u
              kojem mladi aktivno učestvuju u razvoju društva.
            </p>

            <button className='about_us__button'>
              <Link to='/about'>Više o nama</Link>
            </button>
          </div>
        </>
      }
    />
    <Section title='Bavimo se' content={bavimoSe} />
    <Footer />
  </>
);
