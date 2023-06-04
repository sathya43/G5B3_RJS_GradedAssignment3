import React, { useEffect, useState } from 'react'
import { Spinner, Alert, Row, Col } from 'react-bootstrap'
import {
  getMoviesByCategory,
  addMovieToFavourite,
  removeMovieFromFavourite,
} from '../../services/movies'
import { IMovieData } from '../../models/IMovieData'
import { Link } from 'react-router-dom'
import '../css/App.css'

type Props = {
  category: string
}

const MovieListPage = ({ category }: Props) => {
  const [movies, setMovies] = useState<IMovieData[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredMovies, setFilteredMovies] = useState<IMovieData[]>([])
  const [favorite, setFav] = useState<IMovieData[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let data = await getMoviesByCategory(category)
        setMovies(data)
        if (searchQuery.length > 0) {
          const filteredMoviesTemp = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          setFilteredMovies(filteredMoviesTemp)
        } else {
          setFilteredMovies(data)
        }
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [category, favorite])

  if (loading) {
    return <Spinner animation='border' />
  }

  if (error) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  function isMovieFavorite(movie: IMovieData) {
    return favorite.some((value) => value.id === movie.id)
  }

  function handleAddToFavorites(movie: IMovieData): void {
    if (isMovieFavorite(movie)) {
      const deleteFav = async () => {
        try {
          const fav = await removeMovieFromFavourite('favourite', movie.id)
          setFav((prevFavorites) =>
            prevFavorites.filter((item) => item.id !== movie.id)
          )
        } catch (error) {
          console.error(error)
          setError(error as Error)
        }
      }
      deleteFav()
    } else {
      const addFav = async () => {
        try {
          const fav = await addMovieToFavourite('favourite', movie)
          setFav((prevFavorites) => [...prevFavorites, fav])
        } catch (error) {
          console.error(error)
          setError(error as Error)
        }
      }
      addFav()
      isMovieFavorite(movie)
    }
  }

  const getAverageRating = (ratings: number[]): string => {
    if (ratings.length === 0) {
      return 'NA'
    }

    const sum = ratings.reduce((acc, rating) => acc + rating, 0)
    const average = sum / ratings.length
    return average.toFixed(1)
  }

  return (
    <>
      <div className='search-bar'>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search movies'
        />
      </div>
      <div className='movie-list'>
        {filteredMovies.map((movie, index) => (
          <div className='movie-box' key={movie.id}>
            <Link className='posterLink' to={`/${category}/${movie.id}`}>
              {/*  can use this, if img not present in public folder */}
              {/* <img className='poster' src={movie.posterurl} alt={movie.title} /> */}
              {/*  can use this, if images present in public folder */}
              <img
                className='poster'
                src={'/img/' + movie.poster}
                alt={movie.title}
              />
              <h3 className='title'>{movie.title}</h3>
            </Link>
            <div className='rating-favorites'>
              <p className='rating'>
                <span className='star-icon'>&#9733;</span>{' '}
                {getAverageRating(movie.ratings)}
              </p>
              <button
                className={`favorite-button ${
                  isMovieFavorite(movie) ? 'favorite' : ''
                }`}
                onClick={() => handleAddToFavorites(movie)}
              >
                {isMovieFavorite(movie) ? '❤️' : '♡'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MovieListPage
