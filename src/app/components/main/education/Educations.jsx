import Section from '@/app/components/Section';
import Subsection from '@/app/components/Subsection';

const data = [
  {
    title: 'Pregado',
    from: 'AGO 2018',
    to: 'JUN 2022',
    city: 'Barranquilla',
    description:
      'Titulo profesional universitario en la carrera de Ingeniera de Sistemas.',
    company: 'Universidad de la Costa',
  },
  {
    title: 'Diplomado',
    from: 'MAR 2022',
    to: 'MAY 2022',
    city: 'Barranquilla',
    description: 'Diplomado en Gestion de Proyectos TI.',
    company: 'Universidad de la Costa'
  }
];

function Educations() {
  return (
    <>
      <Section title={'Formación'}>
        {data.map((el, key) => (
          <Subsection
            key={key}
            title={el.title}
            from={el.from}
            to={el.to}
            description={el.description}
            company={el.company}
            city={el.city}
          />
        ))}
      </Section>
    </>
  );
}

export default Educations;
