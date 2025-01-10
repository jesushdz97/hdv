import types from './actions/modalActions';

const initialModalState = { open: false, title: '' };

const modalReducer = (_, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.closeModal:
      return initialModalState;

    case types.openModal:
      return { open: true, title: payload.title };
  }
};

export { initialModalState, modalReducer };
