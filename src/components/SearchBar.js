import React from 'react';
import styles from 'style/SearchBar';
import { SEARCH, BOARDING, SITTING } from '../endpoints';
const { func } = React.PropTypes;

const SearchBar = props => (
  <div className='container-fluid'>
    <div className='row search-nav-bar'>
      <div className='12 column'>
        <div className='button-container'>
          <p onClick={props.fetchData.bind(null, SEARCH)} className='type-of-vaycay'>Type of Vacay</p>
          <button onClick={props.fetchData.bind(null, BOARDING)} className='boarding-button'>Boarding</button>
          <button onClick={props.fetchData.bind(null, SITTING)} className='house-sitting-button'>House Sitting</button>
        </div>
      </div>
    </div>
  </div>
);

SearchBar.PropTypes = {
  fetchData: func.isRequired
};

export default SearchBar;
