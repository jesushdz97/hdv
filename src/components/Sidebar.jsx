import Contacts from './sidebar/Contacts';
import Links from './sidebar/Links';
import Skills from './sidebar/Skills';

function Sidebar() {
  return (
    <>
      <Links />
      <div className='sticky-top' style={{ top: '2vh' }}>
        <Skills />
        <Contacts />
      </div>
    </>
  );
}

export default Sidebar;
