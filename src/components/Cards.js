import React from 'react';
import styles from 'style/Cards';


const capitalize = (word) => (
	word
		.toLowerCase()
		.replace(/(^| )(\w)/g, x => x.toUpperCase())
);

const firstLetter = (word) => (
  word
    .toLowerCase()
    .charAt(0)
    .toUpperCase() + '.'
);

const showEllipses = (desc) => {
  if (desc.length > 48 && desc.charAt(48) !== ' ') {
  	return desc.split(' ')
               .slice(0, desc.split(' ').length - 1)
               .join(' ') + '...';
  }
  else if (desc.length > 48) {
    return desc.split(' ')
               .slice(0, desc.split(' ').length - 1)
               .join(' ') + '...';
  }
  return desc;
};

const createURL = (url) => (
  url
    .replace(/ +/g,' ')
    .replace(/[^a-zA-Z\_ ]/g, '')
  	.replace(/[-']/g, '')
  	.replace(/ /g,'-')
);

const Cards = props => (
  <div className='container-fluid cards-container'>
    <div className='row'>
      <div className='12 column'>
        {props.list.map((card, index) => (
          <div className='card' key={index}>
            <h1 className='user-name'>{capitalize(card.user.first) + ' ' + firstLetter(card.user.last)}</h1>
            <h3 className='title'>{card.title}</h3>
            <h3 className='title' >{card.pet.name}</h3>
            <p className='desc'>{showEllipses(card.description)}</p>
            <p className='url'>{createURL(card.title)}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Cards;
