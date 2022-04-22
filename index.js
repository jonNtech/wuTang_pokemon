const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })

  app.get('pokemon', async(request, response) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com',
        'X-RapidAPI-Key': 'APIKEY'
      }
    };
    
    const getFetch = await fetch('https://pokedex2.p.rapidapi.com/pokedex/us/pikachu', options)

    const pokeNameResponse = await getFetch.json()

    console.log(pokeNameResponse)
    response.json(pokeNameResponse)
})
