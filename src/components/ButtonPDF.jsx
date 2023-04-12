import pdfIcon from '/icons/pdf17.svg';
import hdv from '/docs/hdv_jesus_hernandez.pdf';

function ButtonPDF() {
  return (
    <a
      href={hdv}
      style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      className='btn btn-lg bg-teal rounded-pill'
      download
    >
      <img src={pdfIcon} alt='' />
    </a>
  );
}

export default ButtonPDF;
