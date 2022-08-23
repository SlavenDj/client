import './App.css';
import Header from './Header.jsx';
function App() {
  const navigationItems = [
    {
      name: 'Početna',
      url: '/home',
    },
    {
      name: 'O nama',
      url: '/about',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Projekti',
      url: '/projects',
    },
    {
      name: 'Kontakt',
      url: '/contact',
    },
  ];
  return (
    <div>
      <Header logoPath='' navigationItems={navigationItems} />
      {/* <h1>Udruženje za razvoj i podršku mladih</h1>
      <p>
        Pomažemo i obučavamo mlade BiH preko raznovrsnih radionica, projekata i
        online-škola
      </p>
      <button>Naši projekti</button>
      <button>Prijave</button>

      <h2>Najnovije</h2>
      <div>
        <img src='i1' alt='img 1' />
        <p className='title'>long title of article</p>
        <div className='tags'>
          <span className='tag'>tag 1</span>
          <span className='tag'>tag 2</span>
          <span className='tag'>tag 3</span>
        </div>
      </div>
      <div>
        <img src='i1' alt='img 1' />
        <p className='title'>long title of article</p>
        <div className='tags'>
          <span className='tag'>tag 1</span>
          <span className='tag'>tag 2</span>
          <span className='tag'>tag 3</span>
        </div>
      </div> */}
    </div>
  );
}

export default App;
