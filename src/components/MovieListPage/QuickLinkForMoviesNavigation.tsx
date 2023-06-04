import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const QuickLinkForMoviesNavigation = () => {
  const buttons = [
    { label: 'Home', link: '/' },
    { label: 'Coming soon', link: '/movies-coming' },
    { label: 'Movies in Theatres', link: '/movies-in-theaters' },
    { label: 'Top Rated Indian', link: '/top-rated-india' },
    { label: 'Top Rated movies', link: '/top-rated-movies' },
    { label: 'Favourite', link: '/favourite' },
  ]

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '8vh',
        backgroundColor: 'gainsboro',
      }}
    >
      {buttons.map((button, index) => (
        <NavLink key={index} to={button.link} style={{ margin: '0 10px' }}>
          <Button
            variant='primary'
            style={{ margin: '15px', backgroundColor: 'azure' }}
            className='hover-button'
          >
            {button.label}
          </Button>
        </NavLink>
      ))}
    </div>
  )
}

export default QuickLinkForMoviesNavigation
