import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1 className='home-page__title'>Welcome to Movie Tips!</h1>
      <p className='home-page__description'>
        Explore a wide range of movies across various categories and create your
        own favorites list. Use the quick links above to navigate to different
        categories and search for specific movies.
      </p>
    </div>
  )
}

export default HomePage
