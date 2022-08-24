import { ImgsR } from './ImgsR';

export default function HeroSection() {
  return (
    <section className='hero'>
      <ImgsR />
      <div className='hero__content'>
        <div className='hero__text'>
          <h1>Udruženje za razvoj i podršku mladih</h1>
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
    </section>
  );
}
