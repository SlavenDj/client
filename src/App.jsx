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
  const data = [
    {
      icon: <i class='ri-mail-line'></i>,
      text: 'info@plusultra.ba',
      link: 'mailto:info@plusultra.ba',
    },
    {
      icon: <i class='ri-map-pin-line'></i>,
      text: 'Reisa Fehima Spahe 96, 71000 Sarajevo',
      link: 'https://www.google.com/search?q=Reisa+Fehima+Spahe+96%2C+71000+Sarajevo&oq=Reisa+Fehima+Spahe+96%2C+71000+Sarajevo&aqs=chrome..69i57.152j0j1&sourceid=chrome&ie=UTF-8',
    },
    {
      icon: <i class='ri-phone-line'></i>,
      text: '+387 62 907-022',
      link: 'tel:+38762907022',
    },
  ];

  const socialMedias = [
    {
      icon: <i class='ri-facebook-circle-fill'></i>,
      url: 'https://www.facebook.com/PlusUltraYouth/',
    },
    {
      icon: <i class='ri-instagram-fill'></i>,
      url: 'https://www.instagram.com/plusultrayouth/',
    },
    {
      icon: <i class='ri-linkedin-box-fill'></i>,
      url: 'https://www.linkedin.com/company/plusultrayouth/?originalSubdomain=ba',
    },
    {
      icon: <i class='ri-youtube-fill'></i>,
      url: 'https://www.youtube.com/channel/UCTdTYI_K02uV__r73Jx-f_g',
    },
  ];

  return (
    <footer>
      <div className='contact_info'>
        <div className='contact_info__info'>
          <h3 className='footer__title'>Contact info</h3>
          <div className='contact_info__content'>
            {data.map(({ icon, text, link }, i) => (
              <div className='contact_info__link' key={i}>
                {icon}
                <a href={link}>{text}</a>
              </div>
            ))}
          </div>
        </div>
        <div className='contact_info__social_media'>
          {socialMedias.map(({ url, icon }, i) => (
            <a href={url} key={i}>
              {icon}
            </a>
          ))}
        </div>
        <p className='copyright'>Copyright © 2022 | slaven.design</p>
      </div>
      <form className='contact_form'>
        <h3 className='footer__title'>Send us a message</h3>
        <input type='email' name='email' placeholder='Email' />
        <textarea
          name='email'
          id='email'
          rows='10'
          placeholder='Message'
        ></textarea>
      </form>
    </footer>
  );
}
