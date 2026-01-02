import types from './actions/modalActions';

const initialModalState = { open: false, title: '' };

const modalReducer = (_, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.closeModal:
      return initialModalState;

    case types.openModal:
      return { open: true, title: payload.title };
  }
};

export { initialModalState, modalReducer };
