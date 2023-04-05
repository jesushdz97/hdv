import React from 'react';
import Header from './components/header/Header';
import Body from './components/main/Body';
import ButtonPDF from './components/ButtonPDF';
import PDF from './components/PDF';
import Modal from './components/Modal';

function App() {
  return (
    <div className='container p-4'>
      <Header />
      <Body />
      <ButtonPDF />

      <Modal>
        <PDF />
      </Modal>
    </div>
  );
}

export default App;
