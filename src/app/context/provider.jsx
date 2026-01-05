import { useReducer, createContext, useState } from 'react';
import { modalReducer, initialModalState } from '../reducers/modalReducer';
import { useContext } from 'react';
import languageEnum from '../reducers/actions/languageActions';

export const providerContext = createContext();

export const Provider = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState,
  );

  const [isSpanishState, setIsSpanish] = useState(true);

  const value = {
    modalState,
    modalDispatch,
    isSpanishState,
    setIsSpanish
  };

  return (
    <providerContext.Provider value={value}>
      {children}
    </providerContext.Provider>
  );
};

export const useAppContext = () => useContext(providerContext);
export const useModalState = () => useContext(providerContext).modalState;
export const useDispatchModal = () => useContext(providerContext).modalDispatch;
export const useIsSpanishState = () => useContext(providerContext).isSpanishState;
export const useSetIsSpanish = () => useContext(providerContext).setIsSpanish;
