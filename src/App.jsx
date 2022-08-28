import 'remixicon/fonts/remixicon.css';
import './about_us.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Vesti from './components/Vesti';
import logo from './imgs/logo_sareni.svg';
import team_img_2 from './imgs/teams_imgs_2.png';
import Section from './Section';

function App() {
  const cimeSeBavimo = [
    {
      title: 'Digitalne kompetencije',
      icon: 'ri-check-line',
      text: 'Radimo na razvoju digitalnih kompetencija mladih. Programiranje, grafički dizajn, korištenije računara i inteneta, digitalina komunikacija i su samo neke od oblasti koje su neophodne za snalaženje na današinjem tržištu rada.',
    },
    {
      title: 'Preduzetništvo',
      icon: 'ri-vip-diamond-line',
      text: 'Preduzetinštvo zahtjeva poseban način razmišljanjai set vještina. Dobra stva jeste da se preduzetništvo može naučit, te da se sticanjem preduzetničkog načina razmišljanja i vještina mladima mogu otvoriti mnoga vrata na tržištu rada.',
    },
    {
      title: 'Soft skills i business skills',
      icon: 'ri-building-line',
      text: 'U današnje vrijeme, kako u poslovnoj tako i u privatnoj sferi života, kjučno je kako radimo i komuniciramo sa drugim ljudima. Doprinosimo razvoju prezentacijskih vještina, emocionalne inteligencije, poslovne komunikacije i drugih vještina kod mladih.',
    },
  ];

  const bavimoSe = (
    <div className='sections__cards'>
      {cimeSeBavimo.map((kartica, i) => (
        <SectionsCard kartica={kartica} key={i} />
      ))}
    </div>
  );
  return (
    <>
      <Header logoPath={logo} />
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
                Naša vizija jeste stvoriti okruženje koje podstiče rast i u
                kojem je potencijal mladih u potpunosti iskorišten i prepoznat,
                te u kojem mladi aktivno učestvuju u razvoju društva.
              </p>

              <button className='about_us__button'>
                <a href='/about'>Više o nama</a>
              </button>
            </div>
          </>
        }
      />
      <Section title='Bavimo se' content={bavimoSe} />
      <Footer />
    </>
  );
}

export default App;
function SectionsCard({ kartica }) {
  const { title, icon, text } = kartica;
  return (
    <div className='section__card'>
      <div className='icon_circle'>
        <i className={icon}></i>
      </div>
      <p className='card__title'> {title}</p>
      <p className='card_des'>{text}</p>
    </div>
  );
}

function Footer() {
  return <footer>hi</footer>;
}
