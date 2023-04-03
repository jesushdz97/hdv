import React from 'react';

function Header() {
  return (
    <header className='container rounded shadow bg-teal p-4 mb-4'>
      <div className='mb-4'>
        <h2 className='text-uppercase fw-bold'>Jesús Enrique Hernández Simanca</h2>
        <h5>Backend Developer</h5>
      </div>

      <div>
        <p className='mb-0'>Barranquilla, Colombia</p>
        <p>+57 3057688982 - jehersi988@gmail.com</p>
      </div>
    </header>
  );
}

export default Header;
