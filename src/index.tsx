import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'
import {
  getMoviesByCategory,
  removeMovieFromFavourite,
} from './services/movies'
import { IMovieData } from './models/IMovieData'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// const removeEntries = async () => {
//   try {
//     const response = await getMoviesByCategory('favourite')
//     await response.map((movie: IMovieData) => {
//       removeMovieFromFavourite('favourite', movie.id)
//     })
//     console.log('Entries removed successfully!')
//     console.log('Favourites are reset succesfully')
//   } catch (error) {
//     console.error('Error removing entries:', error)
//   }
// }

// removeEntries()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
