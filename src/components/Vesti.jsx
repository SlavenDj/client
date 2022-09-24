import { useEffect, useState } from 'react';
import './article.css';
export default function Vesti() {
  const [vesti, setVesti] = useState([]);
  useEffect(() => {
    async function x() {
      try {
        const vestiFromURI = await fetch(
          'https://fd98699e-c3b9-45cf-849d-39c67ad48ff6.mock.pstmn.io'
        );

        setVesti(await vestiFromURI.json());
      } catch (err) {
        console.log(err);
      }
    }
    x();
  }, []);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (vesti !== [])
      setArticles(
        vesti.map(({ title, img, tags }, i) => (
          <Article key={i} title={title} img={img} tags={tags} />
        ))
      );
  }, [vesti]);

  return (
    <div className='hero__news'>
      <h2>Najnovije</h2>
      <div className='hero__articles'>{articles}</div>
    </div>
  );
}
function Article({ title, img, tags }) {
  return (
    <div className='article'>
      <img src={img} alt='' className='article__img' loading='lazy' />
      <div className='article__content'>
        <h3 className='article__title' title={title}>
          {title}
        </h3>
        <div className='article__tags'>
          {tags.map((tag, i) => (
            <div className='article__tag' key={i}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
