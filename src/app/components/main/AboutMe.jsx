import Paragraph from '../Paragraph';
import Section from '../Section';

function AboutMe() {
  return (
    <Section title={'Perfil Profesional'}>
      <Paragraph>
        Ingeniero de Sistemas y Desarrollador Fullstack con más de tres años de experiencia en el desarrollo de aplicaciones web utilizando Angular, Laravel y .NET Core. Especializado en la construcción de soluciones escalables, eficientes y de alta calidad, aplicando las mejores prácticas de desarrollo, principios SOLID y patrones de diseño.
      </Paragraph>
      <Paragraph>
        Actualmente me desempeño como Desarrollador Fullstack en Soft-G.Net, donde diseño, implemento y mantengo aplicaciones empresariales con APIs REST, frontend en Angular y backend en Laravel o .NET, integrando bases de datos en SQL Server.
      </Paragraph>
      <Paragraph>
        Cuento con un sólido conocimiento en arquitectura MVC, programación orientada a objetos (POO), programación funcional y patrones de diseño. Me caracterizo por ser un profesional proactivo, adaptable y comprometido con la mejora continua, siempre en busca de nuevos desafíos y oportunidades de aprendizaje.
      </Paragraph>
    </Section>
  );
}

export default AboutMe;
