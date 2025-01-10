import types from '../reducers/actions/modalActions';
import { useDispatchModal, useModalState } from '../context/provider';

const { closeModal } = types;

function Modal({ children }) {
  const modalState = useModalState();
  const dispatch = useDispatchModal();

  const { open, title } = modalState;

  return (
    <div className={`my-modal ${open ? 'd-flex' : 'd-none'}`}>
      <div className='container'>
        <div className='card'>
          <div className='card-header'>
            <div className='d-flex flex-row align-items-center justify-content-between'>
              <h4 className='text-center fw-bold my-3'>{title}</h4>
              <button
                type='button'
                className='btn btn-sm btn-danger'
                onClick={() => dispatch({ type: closeModal })}
              >
                X
              </button>
            </div>
          </div>
          <div className='card-body' style={{ height: '80vh' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
