import Contact from './Contact';

const contacts = [
  {
    name: 'Jorge Zapata',
    company: 'Rama Judicial',
    cellphone: '3024258934',
  },
  {
    name: 'Andres Vasquez',
    company: 'Solution',
    cellphone: '3043977238',
  },
  {
    name: 'Johan Gomez',
    company: 'Sophos',
    cellphone: '3015174618',
  },
];

function Contacts() {
  return (
    <>
      <h5 className='fw-medium'>Referencias</h5>
      {contacts.map((el, key) => (
        <Contact
          key={key}
          name={el.name}
          company={el.company}
          cellphone={el.cellphone}
        />
      ))}
    </>
  );
}

export default Contacts;
