import Contacts from './sidebar/Contacts';
import Languages from './sidebar/Languages';
import Links from './sidebar/Links';
import Skills from './sidebar/Skills';

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
