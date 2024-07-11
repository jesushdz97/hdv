import Paragraph from '../Paragraph';
import Section from '../Section';

function AboutMe() {
  return (
    <Section title={'Perfil Profesional'}>
      <Paragraph>
        Ingeniero de Sistemas, Desarrollador web fullstack
        con más de dos años de experiencia, especializado en
        los frameworks de Angular y Laravel.
        Tengo un sólido conocimiento en infraestructura y patrones de diseño,
        lo que me permite crear aplicaciones limpias, escalables y siguiendo
        siempre las mejores prácticas. Cuyo compromiso da el de entregar código de alta
        calidad y soluciones eficientes que respondan a las necesidades del proyecto.
      </Paragraph>
      <Paragraph>
        Actualmente desarrollo en la empresa{' '}
        <a
          href='https://www.linkedin.com/company/soft-g-net-sas/mycompany/'
          className='text-reset'
          target='_blank'
        >
          Soft-G.Net
        </a>.
        Empresa en la cual me desempeño como desarrollador fullstack en distintos proyectos,
        implementando y soportando funcionalidades de dichos softwares.
        Todo a nivel de API REST, en donde el frontend se encuentra hecho en Angular,
        el backend en Laravel o .NET y cuyas bases de datos están soportadas con el motor de SQL Server.
      </Paragraph>
      <Paragraph>
        Tengo solidez en la arquitectura MVC, lógica de programación,
        programación funcional, programación orientada objetos, patrones de diseño
        y demás conceptos afines.
        Soy una persona tolerable a la frustración, dispuesta a aprender
        y/o afrontar nuevos retos en mí vida profesional.
      </Paragraph>
    </Section>
  );
}

export default AboutMe;
