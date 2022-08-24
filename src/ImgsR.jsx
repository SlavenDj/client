import imgR1 from './radionica_1.jpeg';
import imgR2 from './radionica_2.webp';
import imgR3 from './radionica_3.webp';
import imgR4 from './radionica_4.webp';
import './ImgsR.css';
export function ImgsR() {
  return (
    <div className='imgsR'>
      <div className='imgR-g'>
        <img src={imgR1} alt='' className='imgR1' />
        <img src={imgR2} alt='' className='imgR2' />
        <img src={imgR3} alt='' className='imgR3' />
        <img src={imgR4} alt='' className='imgR4' />
      </div>
    </div>
  );
}
