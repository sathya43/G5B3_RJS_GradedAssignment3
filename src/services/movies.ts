import axios from 'axios'
import { IMovieData } from '../models/IMovieData'

export const getMoviesByCategory = async (category: string) => {
  const response = await axios.get(`http://localhost:3001/${category}`)
  return response.data
}

export const getMovieDeatails = (category: any, id: any) => {
  return axios
    .get<IMovieData>(`http://localhost:3001/${category}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        // Movie not found
        return null // Return null or any other custom value
      }
      throw error // Re-throw the error for other error cases
    })
}

export const addMovieToFavourite = (key: string, movie: IMovieData) => {
  return axios
    .post<IMovieData>(`http://localhost:3001/${key}`, movie, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
}

export const removeMovieFromFavourite = (key: string, id: string) => {
  return axios
    .delete<IMovieData>(`http://localhost:3001/${key}/${id}`)
    .then((response) => response.data)
}
