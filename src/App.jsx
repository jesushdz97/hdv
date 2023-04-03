import React from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';
import ButtonPDF from './components/ButtonPDF';

function App() {
  return (
    <div className='container p-4'>
      <Header />
      <Body />
      <ButtonPDF />
    </div>
  );
}

export default App;
