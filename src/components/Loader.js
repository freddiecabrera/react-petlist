import React from 'react';
import styles from 'style/Loader';

const Loader = () => (
  <div className='loader-wrapper'>
  	<div className='loader'>
      <div className='roller'></div>
      <div className='roller'></div>
    </div>
    <div id='loader2' className='loader'>
      <div className='roller'></div>
      <div className='roller'></div>
    </div>
    <div id='loader3' className='loader'>
      <div className='roller'></div>
      <div className='roller'></div>
    </div>
  </div>
);

export default Loader;
