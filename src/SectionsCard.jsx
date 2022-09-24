export function SectionsCard({ kartica }) {
  const { title, icon, text } = kartica;
  return (
    <div className='section__card'>
      <div className='icon_circle'>
        <i className={icon}></i>
      </div>
      <p className='card__title'> {title}</p>
      <p className='card_des'>{text}</p>
    </div>
  );
}
