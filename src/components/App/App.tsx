import React from 'react'
import Header from '../Header/Header'
import '../css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieListPage from '../MovieListPage/MovieListPage'
import QuickLinkForMoviesNavigation from '../MovieListPage/QuickLinkForMoviesNavigation'
import MovieDetails from '../MovieListPage/MovieDetails'
import HomePage from '../HomePage/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <QuickLinkForMoviesNavigation />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route
            path='/movies-coming'
            element={<MovieListPage category={'movies-coming'} />}
          ></Route>
          <Route
            path='/movies-in-theaters'
            element={<MovieListPage category={'movies-in-theaters'} />}
          ></Route>
          <Route
            path='/top-rated-india'
            element={<MovieListPage category={'top-rated-india'} />}
          ></Route>
          <Route
            path='/top-rated-movies'
            element={<MovieListPage category={'top-rated-movies'} />}
          ></Route>
          <Route
            path='/favourite'
            element={<MovieListPage category={'favourite'} />}
          ></Route>
          <Route path='/:category/:movieId' element={<MovieDetails />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
