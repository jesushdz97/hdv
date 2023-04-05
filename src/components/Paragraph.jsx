const Paragraph = ({ children }) => {
  return (
    <p style={{ textAlign: 'justify' }} className='mb-2'>
      {children}
    </p>
  );
};

export default Paragraph;
