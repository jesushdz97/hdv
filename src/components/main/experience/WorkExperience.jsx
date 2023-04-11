import Section from '@/components/Section';
import Subsection from '@/components/Subsection';
import Paragraph from '@/components/Paragraph';
import { workExperience } from '@/components/data/data';

const WorkExperience = () => {
  return (
    <Section title={'Experiencia Laboral'}>
      {workExperience.map((el, key) => {
        return (
          <Subsection
            key={key}
            title={el.title}
            company={el.company}
            from={el.duration.from}
            to={el.duration.to}
            city={el.city}
            description={el.description}
          >
            <Responsibilities responsibilities={el.responsibilities} />
            <Technologies technologies={el.technologies} />
          </Subsection>
        );
      })}
    </Section>
  );
};

const Responsibilities = ({ responsibilities }) => (
  <>
    <Paragraph>Responsabilidades:</Paragraph>
    <ul>
      {responsibilities.map((responsibility, key) => (
        <li key={key}> {responsibility} </li>
      ))}
    </ul>
  </>
);

const Technologies = ({ technologies }) => (
  <>
    <Paragraph>
      <i> Tecnologías: {`${technologies.join(', ')}.`} </i>
    </Paragraph>
  </>
);

export default WorkExperience;
