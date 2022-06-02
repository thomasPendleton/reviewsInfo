import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]

  const incrementIndex = () => {
    if (index + 1 >= people.length) {
      setIndex(0)
    } else {
      setIndex((prev) => prev + 1)
    }
  }
  const decrementIndex = () => {
    if (index <= 0) {
      setIndex(people.length - 1)
    } else {
      setIndex((prev) => prev - 1)
    }
  }

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length)
    if (randomIndex === index) {
      setIndex(incrementIndex)
    }
    setIndex(randomIndex)
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={decrementIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={incrementIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Review
