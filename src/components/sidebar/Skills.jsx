import Skill from './Skill';

const data = [
  { name: 'Laravel', progress: '100%' },
  { name: 'Angular', progress: '100%' },
  { name: '.NET', progress: '85%' },
  { name: 'Typescript', progress: '85%' },
  { name: 'React', progress: '75%' },
  { name: 'SQL', progress: '80%' },
  { name: 'Linux', progress: '75%' },
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
