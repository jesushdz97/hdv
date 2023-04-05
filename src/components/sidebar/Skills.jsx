import Skill from './Skill';

const data = [
  { name: 'Backend', progress: '90%' },
  { name: 'Laravel', progress: '90%' },
  { name: 'Git', progress: '90%' },
  { name: 'React', progress: '85%' },
  { name: 'SQL', progress: '80%' },
  { name: 'Linux', progress: '75%' },
  { name: 'Frontend', progress: '75%' },
  { name: 'PHP', progress: '70%' },
  { name: 'Javascript', progress: '80%' },
  { name: 'Node', progress: '65%' },
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
