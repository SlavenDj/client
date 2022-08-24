import './App.css';
import logo from './logo_white.svg';
import Header from './Header';
import HeroSection from './HeroSection';

import 'remixicon/fonts/remixicon.css';
import { Vesti } from './Vesti';
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
