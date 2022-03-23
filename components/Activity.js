import { useContext } from 'react'
import uniqid from 'uniqid'
import TrackCard from './TrackCard'
import { ActivityContext } from '../contexts/activity'
import { activity } from '../data/portfolio'

const Activity = () => {
  const [{ nowPlaying, topTracks }] = useContext(ActivityContext)
  const { showNowPlaying, showTopTracks } = activity

  return (showNowPlaying && nowPlaying) || (showTopTracks && topTracks) ? (
    <section id='activity' className='section activity'>
      <br />
      <h2 className='section__title'>Spotify Activity</h2>

      {showNowPlaying && nowPlaying && (
        <>
          <br />
          <h3 className='section__title'>Currently Listening To</h3>
          <TrackCard key={uniqid()} track={nowPlaying} />
        </>
      )}

      {showTopTracks && topTracks && (
        <>
          {showNowPlaying && nowPlaying && <br />}
          <br />
          <h3 className='section__title'>Top Tracks</h3>
          <div className='tracks__list'>
            {topTracks.map((track) => (
              <TrackCard key={uniqid()} track={track} />
            ))}
          </div>
        </>
      )}
    </section>
  ) : null
}

export default Activity
