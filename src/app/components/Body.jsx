import AboutMe from './AboutMe';
import WorkExperience from './main/experience/WorkExperience'
import Sidebar from './sidebar/Sidebar';
import Educations from './main/education/Educations';

const Body = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='d-none d-md-block col-md-4 pe-5'>
          <Sidebar />
        </div>
        <div className='col-sm-12 col-md-8'>
          <AboutMe />
          <WorkExperience />
          <Educations />
        </div>
      </div>
    </div>
  );
};

export default Body;
