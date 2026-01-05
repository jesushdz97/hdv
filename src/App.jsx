import Header from './app/components/Header';
import Body from './app/components/Body';
import ButtonPdf from './app/components/shared/ButtonPdf';
import ModalPDF from './app/components/ModalPDF';
import ButtonLanguague from './app/components/shared/ButtonLanguague';

function App() {
  return (
    <div className='container p-4'>
      <Header />
      <Body />
      <ButtonPdf />
      <ButtonLanguague />
      <ModalPDF />
    </div>
  );
}

export default App;
