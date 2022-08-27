import team_img from '../imgs/teams_imgs.webp';
import './HeroSection.css';
export default function HeroSection() {
  return (
    <div className='hero'>
      <div className='hero__content'>
        <div className='hero__text'>
          <h1>Udruženje za razvoj i podršku mladih Plus Ultra</h1>
          <p className='hero__p'>
            Pomažemo i obučavamo mlade BiH preko raznovrsnih radionica,
            projekata i online-škola
          </p>
        </div>
        <div className='hero__buttons'>
          <button className='hero__btn btn--primary'>Naši projekti</button>
          <button className='hero__btn btn--secondary'>Prijave</button>
        </div>
      </div>

      <img src={team_img} alt='' loading='lazy' className='hero__img' />
    </div>
  );
}
