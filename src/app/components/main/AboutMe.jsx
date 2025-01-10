import Paragraph from '../Paragraph';
import Section from '../Section';

function AboutMe() {
  return (
    <Section title={'Perfil Profesional'}>
      <Paragraph>
        Ingeniero de Sistemas y Desarrollador Fullstack con más de 2 años de experiencia en Angular, 
        Laravel y .NET Core. Especializado en la creación de aplicaciones limpias, escalables y de alta calidad, 
        aplicando las mejores prácticas y 
        patrones de diseño.
        Actualmente trabajo <a
          href='https://www.linkedin.com/company/soft-g-net-sas/mycompany/'
          className='text-reset'
          target='_blank'
        >
          Soft-G.Net
        </a>. como desarrollador fullstack,  implementando y manteniendo proyectos con APIs REST, 
        frontend en Angular, backend en Laravel o .NET, y bases de datos en SQL Server.
      </Paragraph>
      <Paragraph>
      Tengo experiencia en arquitectura MVC, programación funcional, POO, y patrones de diseño. Soy adaptable, proactivo, y dispuesto a aprender y asumir nuevos retos profesionales.
      </Paragraph>
    </Section>
  );
}

export default AboutMe;
