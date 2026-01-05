import Section from './shared/Section';
import Paragraph from './shared/Paragraph';

function AboutMe() {
  return (
    <Section title={'Resumen'}>
      <Paragraph>
        Ingeniero de Sistemas y Desarrollador Fullstack con sólida experiencia en el diseño y construcción de ecosistemas
        web escalables utilizando .NET Core, Angular y Laravel. Mi enfoque profesional va más allá de la codificación; me
        especializo en Arquitectura de Software, fundamentando mis desarrollos en Clean Architecture y Arquitectura por
        Capas (N-Tier) para garantizar soluciones robustas y desacopladas.
      </Paragraph>
      <Paragraph>
        Priorizo estrictamente las Buenas Prácticas de ingeniería, aplicando Principios SOLID y patrones de diseño como el
        Patrón Repositorio para asegurar un código limpio, testearle y de fácil mantenimiento. Me destaco por transformar
        requerimientos complejos en software eficiente, elevando el estándar técnico de los proyectos en los que participo.
      </Paragraph>
    </Section>
  );
}

export default AboutMe;
