import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import React from 'react'
import './App.css'

// @ts-ignore
const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY)
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

function App() {
  return (
    <Grid width={window.innerWidth} columns={3} fetchGifs={fetchGifs} />
  )
}

export default App;
