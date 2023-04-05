import Title from './Title';

function Section({ title, children }) {
  return (
    <div className='mb-4'>
      <Title> {title} </Title>
      {children}
    </div>
  );
}

export default Section;
