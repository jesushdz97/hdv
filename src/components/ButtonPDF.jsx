import pdfIcon from '/icons/pdf17.svg';
import hdv from '/docs/hdv_jesus_hernandez.pdf';
import { useState } from 'react';

function ButtonPDF() {
  return (
    <button
      style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      className='btn btn-lg bg-teal rounded-pill'
    >
      <img src={pdfIcon} alt='' />
    </button>
  );
}

export default ButtonPDF;
