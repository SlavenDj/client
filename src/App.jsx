import logo from './imgs/logo_white.svg';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

import 'remixicon/fonts/remixicon.css';
// import { Vesti } from './components/Vesti';
function App() {
  return (
    <div>
      <Header logoPath={logo} />
      <HeroSection />
      {/* <Vesti /> */}
    </div>
  );
}

export default App;
