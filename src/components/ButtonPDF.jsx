import ReactPDF from '@react-pdf/renderer';
import pdfIcon from '/icons/pdf17.svg';
import App from '../App';

function ButtonPDF() {
  return (
    <button
      style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      className='btn btn-lg bg-teal rounded-pill'
      type='button'
    >
      <img src={pdfIcon} alt='' />
    </button>
  );
}

export default ButtonPDF;
