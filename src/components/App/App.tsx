import React from 'react'
import Header from '../Header/Header'
import '../css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieListPage from '../MovieListPage/MovieListPage'
import QuickLinkForMoviesNavigation from '../MovieListPage/QuickLinkForMoviesNavigation'
import MovieDetails from '../MovieListPage/MovieDetails'

const App = () => {
  // const [favorite, setFav] = useState<IMovieData[]>([])
  // const [error, setError] = useState<Error | null>(null)

  // function isMovieFavorite(movie: IMovieData) {
  //   return favorite.some((value) => value.id === movie.id)
  // }

  // const [favouriteMovies, setfavouriteMovies] = useState<IMovieData[]>([])
  // useEffect(() => {
  //   const removeEntries = async () => {
  //     try {
  //       const response = await getMoviesByCategory('favourite')
  //       setfavouriteMovies(response)
  //       await favouriteMovies.forEach((movie) => {
  //         console.log(
  //           'Resetting favourites at start up to remove prev fav movie' +
  //             movie.id
  //         )
  //         removeMovieFromFavourite('favourite', movie.id)
  //       })
  //     } catch (error) {
  //       console.error('Error removing entries:', error)
  //     }
  //   }
  //   removeEntries()
  // }, [])
  return (
    <BrowserRouter>
      <>
        <Header />
        <QuickLinkForMoviesNavigation />
        <Routes>
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
