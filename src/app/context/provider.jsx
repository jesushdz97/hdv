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

  const [languageState, setLanguageState] = useState(languageEnum.spanish);

  const value = {
    modalState,
    modalDispatch,
    languageState,
    setLanguageState
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
export const useLanguageState = () => useContext(providerContext).languageState;
export const useSetLanguageState = () => useContext(providerContext).setLanguageState;
