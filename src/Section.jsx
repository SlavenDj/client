export default function Section({ title, content }) {
  return (
    <section className='sections'>
      <h2>{title}</h2>
      <div className='sections__main'>{content}</div>
    </section>
  );
}
