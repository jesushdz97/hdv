import React from 'react';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';

function Subsection({ title, company, from, to, city, description, children }) {
  return (
    <div className='mb-4'>
      <Subtitle> {`${title}, ${company}`} </Subtitle>
      <Paragraph> {`${from} - ${to}, ${city}`} </Paragraph>
      <Paragraph> {description} </Paragraph>
      {children}
    </div>
  );
}

export default Subsection;
