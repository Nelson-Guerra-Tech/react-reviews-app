import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // as the index value changes within the people array, the useState value will change as well
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(people);

  // check the array index
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  // next person
  const nextPerson = () => {
    setIndex((index) => {
      // +1 because we want to see the next person
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  // prev person
  const prevPerson = () => {
    setIndex((index) => {
      // +1 because we want to see the next person
      let newIndex = index - 1;

      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      {/* profile info */}
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        {/* navigation buttons */}
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
