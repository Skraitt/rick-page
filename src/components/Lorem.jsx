import React from 'react';
import image from '../assets/images/img.png';
import '../assets/styles/components/Lorem.scss';

export default function Lorem() {
  return (
    <div className="lorem">
      <div className="lorem__text">
        <h2 className='lorem__text--title'>JavaScript Asynchronism</h2>
        <article className='lorem__text--article'> On this site you can find information about your favorite scientist and his unfortunate grandson. In addition to other characters that appear in the series, as well as information about them. The purpose of this project was to practice what was learned about asynchronism in JavaScript. For this I made use of an asynchronous function to make requests to the API, the same that you can visit in: <a  className='lorem__text--a' href='https://rickandmortyapi.com/about'>Rick and Morty's API.</a></article>
      </div>
      <img className='lorem--img' src={image} alt='Rick_and_Morty' />
    </div>
  )
}
