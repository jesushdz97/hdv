import Contacts from './Contacts';
import Languages from './Languages';
import Links from './Links';
import Skills from './Skills';

function Sidebar() {
  return (
    <>
      <Links />
      <div className='sticky-top' style={{ top: '2vh' }}>
        <Skills />
        <Contacts />
        <Languages />
      </div>
    </>
  );
}

export default Sidebar;
