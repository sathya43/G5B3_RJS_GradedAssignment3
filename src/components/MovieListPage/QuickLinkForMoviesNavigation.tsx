import React from 'react'
import { Link } from 'react-router-dom'
import '../css/QuickLinkForMoviesNavigation.css'
import { Navbar, Nav, Container } from 'react-bootstrap'

const QuickLinkForMoviesNavigation = () => {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Nav className='me-auto'>
            <div className='page'>
              <div className='page__categories'>
                <Nav.Link href='/' className='page__category-link'>
                  Home
                </Nav.Link>
                <Nav.Link href='/movies-coming' className='page__category-link'>
                  Upcoming
                </Nav.Link>
                <Nav.Link
                  href='/movies-in-theaters'
                  className='page__category-link'
                >
                  In Theatres
                </Nav.Link>
                <Nav.Link
                  href='/top-rated-india'
                  className='page__category-link'
                >
                  Top Rated India
                </Nav.Link>
                <Nav.Link
                  href='/top-rated-movies'
                  className='page__category-link'
                >
                  Top Rated Movies
                </Nav.Link>
                <Nav.Link href='/favourite' className='page__category-link'>
                  Favourites
                </Nav.Link>
                {/* Add more category links as needed */}
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default QuickLinkForMoviesNavigation
