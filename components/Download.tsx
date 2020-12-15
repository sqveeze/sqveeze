import React from 'react';

const Download: React.FC = () => {
  const downloadCV = async () => {
    await fetch('/api/generate');

    window.open('/mark_pap_cv.pdf');
  }

  return (
    <section>
      <h1>💾 Download</h1>

      <p>If you want to download a copy of my CV, you can do it by clicking <a onClick={downloadCV}>here</a></p>

    </section>
  );
}

export default Download;
