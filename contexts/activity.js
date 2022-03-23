import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { activity } from '../data/portfolio'

const ActivityContext = createContext()

const ActivityProvider = ({ children }) => {
  const [nowPlaying, setNowPlaying] = useState(null)
  const [topTracks, setTopTracks] = useState([])
  const { showNowPlaying, showTopTracks } = activity

  useEffect(() => {
    const fetchData = async () => {
      if (showNowPlaying) {
        const res = await axios.get('/api/now-playing')
        setNowPlaying(res.data)
      }

      if (showTopTracks) {
        const res = await axios.get('/api/top-tracks')
        setTopTracks(res.data)
      }
    }

    fetchData()
  }, [])

  return (
    <ActivityContext.Provider value={[{ nowPlaying, topTracks }]}>
      {children}
    </ActivityContext.Provider>
  )
}

ActivityProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ActivityProvider, ActivityContext }
