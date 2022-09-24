import { Route, Routes } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './about_us.css';
import Header from './components/Header';
import { Home } from './pages/Home';
import { SectionsCard } from './SectionsCard';
import logo from './imgs/logo_white.svg';
import { Page404 } from './pages/page404';
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
export const bavimoSe = (
  <div className='sections__cards'>
    {cimeSeBavimo.map((kartica, i) => (
      <SectionsCard kartica={kartica} key={i} />
    ))}
  </div>
);
function App() {
  return (
    <>
      <Header logoPath={logo} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}
export default App;
