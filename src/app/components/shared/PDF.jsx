import React from 'react';
import spanishVersion from '/docs/MyHdv-(Spanish).pdf'
import englishVersion from '/docs/MyHdv-(English).pdf'

function PDF() {
  return (
    <div className="container d-flex align-items-center justify-content-center gap-3 h-100">
      <a href={spanishVersion} download={'Jesus_Hernandez_CV_Spanish'} className="btn btn-secondary"> Español </a>
      <a href={englishVersion} download={'Jesus_Hernandez_CV_English'} className="btn btn-secondary"> English </a>
    </div>
  );
}

export default PDF;
