import Header from './app/components/header/Header';
import Body from './app/components/main/Body';
import ButtonPDF from './app/components/ButtonPDF';
import ModalPDF from './app/components/ModalPDF';

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
