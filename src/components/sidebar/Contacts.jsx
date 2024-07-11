import Contact from './Contact';

const contacts = [
  {
    name: 'David Barrios',
    company: 'SoftG.Net',
    cellphone: '3024258934',
  },
  {
    name: 'Andres Vasquez',
    company: 'Solution',
    cellphone: '3043977238',
  },
  {
    name: 'Neyla Peña',
    company: 'SoftG.Net',
    cellphone: '3016829190',
  },
];

function Contacts() {
  return (
    <>
      <h5 className='fw-medium mb-3'>Referencias</h5>
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
