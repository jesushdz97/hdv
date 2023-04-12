import Header from './components/header/Header';
import Body from './components/main/Body';
import ButtonPDF from './components/ButtonPDF';
import ModalPDF from './components/ModalPDF';

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
