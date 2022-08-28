import './article.css';
export default function Vesti() {
  const vesti = [
    {
      title: 'title 1',
      img: 'no-url',
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
    {
      title: 'title 1',
      img: 'no-url',
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
    {
      title: 'title 1',
      img: 'no-url',
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
    {
      title: 'title 1',
      img: 'no-url',
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
  ];
  const articles = vesti.map(({ title, img, tags }, i) => (
    <Article key={i} title={title} img={img} tags={tags} />
  ));
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
