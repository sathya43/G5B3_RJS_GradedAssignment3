import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieDeatails } from '../../services/movies'
import { IMovieData } from '../../models/IMovieData'
import '../css/App.css'

const MovieDetails = () => {
  const { category, movieId } = useParams<{
    category: string
    movieId: string
  }>()
  const [movieDetails, setMovieDetails] = useState<IMovieData | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const navigate = useNavigate()
  const [isMovieFavorite, setIsMovieFavourite] = useState<boolean>(false)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDeatails(category, movieId)
        setMovieDetails(data)
        const isMovieAddedToFavourites = await getMovieDeatails(
          'favourite',
          movieId
        )
        if (!isMovieAddedToFavourites === null) {
          setIsMovieFavourite(true)
        }
      } catch (error) {
        console.error(error)
        setError(error as Error)
      }
    }

    fetchMovieDetails()
  }, [category, movieId])

  if (!movieDetails) {
    return <div>Loading...</div>
  }

  const formatDuration = (isoDuration: string) => {
    const duration = /PT(\d+)M/.exec(isoDuration)
    if (duration) {
      const minutes = parseInt(duration[1], 10)
      return `${minutes} minutes`
    }
    return isoDuration
  }

  const duration = formatDuration(movieDetails.duration)

  const ratingsAverage =
    movieDetails.ratings.reduce((sum, rating) => sum + rating, 0) /
    movieDetails.ratings.length

  const handleGoBack = () => {
    navigate(`/${category}`)
  }

  return (
    <div className='movie-details-container'>
      <div className='movie-details'>
        <div className='close-icon' onClick={handleGoBack}>
          <span>&times;</span>
        </div>
        <div className='movie-details-content'>
          <div className='movie-details-poster-container'>
            <img
              className='movie-details-poster'
              src={'/img/' + movieDetails.poster}
              alt={movieDetails.title}
            />
          </div>
          <div className='movie-details-info-container'>
            <div className='movie-details-header'>
              <h2 className='movie-details-title'>{movieDetails.title}</h2>
            </div>
            <div className='movie-details-info'>
              <label>Year:</label> {movieDetails.year}
            </div>
            <div className='movie-details-info'>
              <label>Genres:</label> {movieDetails.genres.join(', ')}
            </div>
            <div className='movie-details-info'>
              <label>IMDB Ratings:</label>{' '}
              {movieDetails.imdbRating ? movieDetails.imdbRating : 'NA'}
            </div>
            <div className='movie-details-info'>
              <label>Average Ratings:</label> {ratingsAverage.toFixed(2)}
            </div>
            <div className='movie-details-info'>
              <label>Content Rating:</label> {movieDetails.contentRating}
            </div>
            <div className='movie-details-info'>
              <label>Duration:</label> {duration}
            </div>
            <div className='movie-details-info'>
              <label>Release Date:</label> {movieDetails.releaseDate}
            </div>
            <div className='movie-details-storyline'>
              <label>Storyline:</label> {movieDetails.storyline}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
