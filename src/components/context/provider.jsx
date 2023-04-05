import { useReducer, createContext } from 'react';
import { modalReducer, initialModalState } from '../reducers/modalReducer';
import { useContext } from 'react';

export const providerContext = createContext();

export const Provider = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState,
  );

  const value = {
    modalState,
    modalDispatch,
  };

  return (
    <providerContext.Provider value={value}>
      {children}
    </providerContext.Provider>
  );
};

export const useModalState = () => useContext(providerContext).modalState;
export const useDispatchModal = () => useContext(providerContext).modalDispatch;
