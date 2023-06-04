import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1 className='home-page__title'>Welcome to Movie Tips!</h1>
      <p className='home-page__description'>
        Explore a wide range of movies across various categories and create your
        own favorites list. Use the quick links below to navigate to different
        categories and search for specific movies.
      </p>
      <div className='home-page__categories'>
        <Link to='/movies-coming' className='home-page__category-link'>
          Upcoming
        </Link>
        <Link to='/movies-in-theaters' className='home-page__category-link'>
          In Theatres
        </Link>
        <Link to='/top-rated-india' className='home-page__category-link'>
          Top Rated India
        </Link>
        <Link to='/top-rated-movies' className='home-page__category-link'>
          Top Rated Movies
        </Link>
        {/* Add more category links as needed */}
      </div>
    </div>
  )
}

export default HomePage
