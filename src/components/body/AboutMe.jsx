import Paragraph from '../Paragraph';
import Section from '../Section';

function AboutMe() {
  return (
    <Section title={'Perfil Profesional'}>
      <Paragraph>
        Ingeniero de Sistemas apasionado y enfocado en el mundo de la
        programación. Soy un backend developer cuya experticia se encuentra en
        el framework de Laravel (PHP), manejo de bases de datos SQL, entornos y
        ambientes en Linux.
      </Paragraph>
      <Paragraph>
        Actualmente desarrollo en la empresa{' '}
        <a
          href='https://www.developapp.co/'
          className='text-reset'
          target='_blank'
        >
          DevelopApp
        </a>{' '}
        en la cual implemento módulos cuyos flujos son ricos en lógica y casos
        de usos de negocio. También cuento con conocimiento del lenguaje de
        Javascript, lenguaje del cual me gustaría especializarme.
        Específicamente tengo conocimientos en la liberia de ReactJS y uno que
        otro contacto con NodeJS y su mundo de librerías y dependencias.
      </Paragraph>
      <Paragraph>
        Tengo solidez en la arquitectura MVC, lógica de programación,
        programación funcional, programación orientada objetos y demás conceptos
        afines. Soy una persona tolerable a la frustración, dispuesta a aprender
        y/o afrontar nuevos retos en mí vida profesional.
      </Paragraph>
    </Section>
  );
}

export default AboutMe;
