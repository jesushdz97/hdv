import React from 'react';
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { useEffect } from 'react';
import { useModalState } from './context/provider';
import { useDispatchModal } from './context/provider';
import types from './reducers/actions/modalActions';

/** Variables */
const $teal = '#20c997';

const $0 = '0px';
const $1 = '4px';
const $2 = '8px';
const $3 = '16px';
const $4 = '24px';
const $5 = '48px';

const $h1 = '22px';
const $h2 = '';
const $h3 = '';
const $h4 = '';
const $h5 = '';
const $h6 = '';

const $bold = '700';
const $bolder = 'bolder';
const $medium = '500';

const container = { width: '100%', marginLeft: 'auto', marginRight: 'auto' };
/** Variables */

const styles = StyleSheet.create({
  main: {
    ...container,
    padding: $4,
    fontFamily: 'JetBrains Mono',
  },
  header: {
    ...container,
    marginBottom: $3,
    padding: $4,
    backgroundColor: $teal,
    borderRadius: '4.8px',
  },
  h5: {
    fontWeight: '500',
    lineHeight: '1.2',
    fontSize: '20px',
  },
});

Font.register({
  family: 'JetBrains Mono',
  src: '/fonts/JetBrainsMono-Regular.ttf',
});

function PDF() {
  const { open } = useModalState();
  const { closeModal } = types;

  const dispatch = useDispatchModal();
  const handleKeyClose = (e) =>
    e.key === 'Escape' && dispatch({ type: closeModal });

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
    document.addEventListener('keydown', handleKeyClose);

    return () => {
      document.removeEventListener('keydown', handleKeyClose);
    };
  }, [open]);

  return (
    <PDFViewer width={'100%'} height={'100%'}>
      <Document title='HDV_JESUS_HERNANDEZ.pdf'>
        <Page size='A4'>
          <View style={styles.main}>
            <Header />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <Text
        style={{
          fontWeight: $bold,
          textTransform: 'uppercase',
          fontSize: '26px',
        }}
      >
        Jesús Enrique Hernández Simanca
      </Text>
      <Text style={styles.h5}>Backend Developer</Text>
      <Text >Barranquilla, Colombia</Text>
      <Text >+57 3057688982 - jehersi988@gmail.com</Text>
    </View>
  );
}

{
  /* <header className='container rounded shadow bg-teal p-4 mb-4'>
      <div className='mb-4'>
        <h2 className='text-uppercase fw-bold'>Jesús Enrique Hernández Simanca</h2>
        <h5>Backend Developer</h5>
      </div>

      <div>
        <p className='mb-0'>Barranquilla, Colombia</p>
        <p>+57 3057688982 - jehersi988@gmail.com</p>
      </div>
    </header> */
}

export default PDF;
