import Skill from './Skill';

const data = [
  { name: 'Laravel', progress: '95%' },
  { name: 'Angular', progress: '95%' },
  { name: '.NET', progress: '90%' },
  { name: 'SQL SERVER', progress: '90%' },
  { name: 'Linux', progress: '85%' },
  { name: 'IIS', progress: '90%' },
];

const Skills = () => {
  return (
    <div className='mb-5'>
      <h5 className='fw-medium'>Competencias</h5>
      {data.map((el, key) => (
        <Skill key={key} name={el.name} progress={el.progress} />
      ))}
    </div>
  );
};

export default Skills;
