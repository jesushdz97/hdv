import useLanguageHook from '@/app/hooks/useLanguageHook';
import Skill from './Skill';

const data = [
  { name: 'Laravel', progress: '95%' },
  { name: 'Angular', progress: '95%' },
  { name: '.NET', progress: '90%' },
  { name: 'SQL SERVER', progress: '90%' },
  { name: 'Linux', progress: '85%' },
  { name: 'IIS', progress: '90%' },
  { name: 'Arquitectura SO', progress: '85%' },
];

const Skills = () => {
  const { isSpanish } = useLanguageHook();

  return (
    <div className='mb-5'>
      <h5 className='fw-medium'>{isSpanish ? 'Competencias' : 'Skills'}</h5>
      {data.map((el, key) => (
        <Skill key={key} name={el.name} progress={el.progress} />
      ))}
    </div>
  );
};

export default Skills;
