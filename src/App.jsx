import Header from './app/components/Header';
import Body from './app/components/Body';
import ButtonPDF from './app/components/shared/ButtonPDF';
import ModalPDF from './app/components/ModalPDF';

function App() {
  return (
    <div className='container p-4'>
      <Header />
      <Body />
      <ButtonPDF />
      <ModalPDF />
    </div>
  );
}

export default App;
