import Paragraph from '../Paragraph';
import Section from '../Section';

function AboutMe() {
  return (
    <Section title={'Perfil Profesional'}>
      <Paragraph>
        {/* Ingeniero de Sistemas apasionado con enfoque en el desarrollo web.
        Soy un backend developer cuya experticia se encuentra en
        el framework de Laravel (PHP), manejo de bases de datos SQL, entornos y
        ambientes en Linux. */}
        Desarrollador web fullstack. Cuya experticia se halla en la pila 
        <span className='fw-bolder'> Angular/Laravel</span>.
        Cuento con mas de dos años de experiencia en el mundo del desarrollo

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
        Actualmente desarrollo en la empresa Soft-G.Net. 
        Empresa en la cual me desempeño como desarrollador fullstack en distintos proyectos, 
        implementando y soportando funcionalidades de dichos softwares. 
        Todo a nivel de API REST, en donde el frontend se encuentra hecho en Angular, 
        el backend en Laravel y cuyas bases de datos están soportadas con el motor de SQL Server.
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
