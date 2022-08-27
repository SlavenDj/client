import logo from './imgs/logo_sareni.svg';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import team_img_2 from './imgs/teams_imgs_2.png';
import 'remixicon/fonts/remixicon.css';
import './about_us.css';
import { Vesti } from './components/Vesti';
function App() {
  return (
    <div>
      <Header logoPath={logo} />
      <HeroSection />
      <Vesti />
      <section className='about_us'>
        <h2>Mi smo</h2>
        <div className='about_us__main'>
          <img src={team_img_2} alt='' className='about_us__img' />
          <div className='about_us__content'>
            <p className='about_us__p'>
              Naša vizija jeste stvoriti okruženje koje podstiče rast i u kojem
              je potencijal mladih u potpunosti iskorišten i prepoznat, te u
              kojem mladi aktivno učestvuju u razvoju društva.
            </p>

            <button className='about_us__button'>
              <a href='/about'>Više o nama</a>
            </button>
          </div>
        </div>
      </section>

      <section className='about_us'>
        <h2>Bavimo se</h2>
        <div className='section__cards'>
          <div className='section__card'>
            <div className='icon_circle'>
              <i className='ri-check-line'></i>
            </div>
            <p className='card__title'>Digitalne kompetencije</p>
            <p className='card_des'>
              Radimo na razvoju digitalnih kompetencija mladih. Programiranje,
              grafički dizajn, korištenije računara i inteneta, digitalina
              komunikacija i su samo neke od oblasti koje su neophodne za
              snalaženje na današinjem tržištu rada.
            </p>
          </div>
          <div className='section__card'>
            <div className='icon_circle'>
              <i className='ri-vip-diamond-line'></i>
            </div>
            <p className='card__title'>Preduzetništvo</p>
            <p className='card_des'>
              Preduzetinštvo zahtjeva poseban način razmišljanjai set vještina.
              Dobra stva jeste da se preduzetništvo može naučit, te da se
              sticanjem preduzetničkog načina razmišljanja i vještina mladima
              mogu otvoriti mnoga vrata na tržištu rada.
            </p>
          </div>
          <div className='section__card'>
            <div className='icon_circle'>
              <i className='ri-building-line'></i>
            </div>
            <p className='card__title'>Soft skills i business skills</p>
            <p className='card_des'>
              U današnje vrijeme, kako u poslovnoj tako i u privatnoj sferi
              života, kjučno je kako radimo i komuniciramo sa drugim ljudima.
              Doprinosimo razvoju prezentacijskih vještina, emocionalne
              inteligencije, poslovne komunikacije i drugih vještina kod mladih.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
