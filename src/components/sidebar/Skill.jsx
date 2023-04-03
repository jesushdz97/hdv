import React from 'react';

function Skill({ name, progress }) {
  return (
    <div className='mb-3'>
      <p className='mb-0'>{name}</p>
      <div className='progress'>
        <div
          className='progress-bar bg-teal'
          style={{ width: `${progress}` }}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
