import './Page404.css';
import img from '../imgs/page404.svg';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
export function Page404() {
  // useEffect(() => {
  //   document.title = 'This is a title';
  // }, []);
  const navigate = useNavigate();
  //https://stackoverflow.com/questions/65948671/how-to-go-back-to-previous-route-in-react-router-dom-v6
  return (
    <div className='page-404'>
      <img src={img} alt='404' />
      <p>Page not found</p>
      <button onClick={(_) => navigate(-1)}>Go back</button>
      <button onClick={(_) => navigate('/')}>Go home</button>
    </div>
  );
}
