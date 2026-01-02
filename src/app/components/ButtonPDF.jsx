import pdfIcon from '/icons/pdf17.svg';
import { useDispatchModal } from '../context/provider';
import types from '../reducers/actions/modalActions';

const OPEN_MODAL = types.openModal;
const PAYLOAD = { title: 'Elegir idioma' };

function ButtonPDF() {
  const dispatch = useDispatchModal();
  const openModal = () => dispatch({ type: OPEN_MODAL, payload: PAYLOAD })

  return (
    <button
      style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      className='btn btn-lg bg-teal rounded-pill'
      onClick={() => openModal()}
    >
      <img src={pdfIcon} alt='pdf-button' />
    </button>
  );
}

export default ButtonPDF;
