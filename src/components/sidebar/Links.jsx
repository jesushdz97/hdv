import React from 'react';

const data = [
  { name: 'Github', link: 'https://github.com/eff-zero' },
  { name: 'LinkedId', link: 'https://www.linkedin.com/in/jesus-hernandez-s/' },
  { name: 'Certica', link: 'https://app.certika.co/badges/NzUwNw==#gs.ubbz4g' },
];

function Links() {
  return (
    <nav className='d-flex gap-1 mb-3'>
      <ul className='list-unstyled'>
        {data.map((el, key) => (
          <li key={key} className='d-inline-block me-2'>
            <a href={el.link} className='text-reset' target='_blank'>
              {el.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Links;
