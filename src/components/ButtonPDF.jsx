import { useDispatchModal } from './context/provider';
import pdfIcon from '/icons/pdf17.svg';
import types from './reducers/actions/modalActions';

function ButtonPDF() {
  const dispatch = useDispatchModal();

  return (
    <button
      style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      className='btn btn-lg bg-teal rounded-pill'
      type='button'
      onClick={() =>
        dispatch({ type: types.openModal, payload: { title: 'PDF' } })
      }
    >
      <img src={pdfIcon} alt='' />
    </button>
  );
}

export default ButtonPDF;
