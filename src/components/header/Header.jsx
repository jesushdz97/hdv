import photo from '/img/profile-pic-square.png';

function Header() {
  return (
    <header className='d-flex flex-row justify-content-between align-items-center rounded shadow bg-teal mb-4'>
      <div className='container p-4'>
        <div className='mb-4'>
          <h2 className='text-uppercase fw-bold'>
            Jesús Enrique Hernández Simanca
          </h2>
          <h5>Fullstack Developer</h5>
        </div>

        <div>
          <p className='mb-0'>Barranquilla, Colombia</p>
          <p>+57 3057688982 - jehersi988@gmail.com</p>
        </div>
      </div>
      <img
        src={photo}
        style={{ height: '235px', objectFit: 'cover' }}
        className='d-none d-md-block rounded'
      />
    </header>
  );
}

export default Header;
