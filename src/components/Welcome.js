import React from 'react';
import { Link } from 'react-router';
import styles from 'style/Welcome';

const Welcome = () => (
  <div className='container-fluid'>
    <div className='bgImageContainer'>
      <img src='https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=3a9edb962b9552d15a3d394974136667' alt='background-image' className='bgImage'/>
    </div>
    <div className='row nav-bar'>
      <div className='12 column'>
        <img className='logo' src='https://blog-photos.dogvacay.com/blog/wp-content/uploads/2015/04/dogvacay_login-logo.png' alt='DogVaycay'/>
        <Link to='/search'><span className='nav-links'>Find a Sitter</span></Link>
      </div>
    </div>
    <div className='search-button-container'>
      <Link to='/search'><button className='search-button'> Find a Sitter</button></Link>
    </div>
  </div>
);

export default Welcome;
