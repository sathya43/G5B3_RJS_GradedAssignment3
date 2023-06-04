const axios = require('axios')
console.log('deleting all favourites at start up')

const resetFav = async () => {
  await axios
    .delete('http://localhost:3001/favourite')
    .then(() => {
      console.log('Favorites removed successfully.')
    })
    .catch((error) => {
      console.error('Error removing favorites:', error)
    })
}

resetFav()
