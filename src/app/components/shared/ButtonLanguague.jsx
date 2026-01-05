
import pdfIcon from '/icons/pdf17.svg';
import { useSetIsSpanish, useIsSpanishState } from '@/app/context/provider';

function ButtonLanguague() {
  const isSpanish = useIsSpanishState();
  const setLanguagueState = useSetIsSpanish();

  return (
    <button
      style={{ position: 'fixed', bottom: '2rem', left: '2rem' }}
      className='btn btn-lg bg-teal rounded-pill'
      onClick={() => setLanguagueState(!isSpanish)}
    >
      <img src={pdfIcon} alt='pdf-button' />
    </button>
  );
}

export default ButtonLanguague;
