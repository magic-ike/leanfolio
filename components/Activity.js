import { useContext } from 'react'
import uniqid from 'uniqid'
import TrackCard from './TrackCard'
import Spacer from './Spacer'
import { ActivityContext } from '../contexts/activity'
import { activity } from '../data/portfolio'

const Activity = () => {
  const [{ nowPlaying, topTracks }] = useContext(ActivityContext)
  const { showNowPlaying, showTopTracks } = activity

  return (showNowPlaying && nowPlaying) || (showTopTracks && topTracks) ? (
    <section id='activity' className='section activity'>
      <Spacer height={2} />
      <h2 className='section__title'>Spotify Activity</h2>

      {showNowPlaying && nowPlaying && (
        <>
          <Spacer height={1} />
          <h3 className='section__title'>Currently Listening To</h3>
          <div className='tracks__list'>
            <TrackCard key={uniqid()} track={nowPlaying} />
          </div>
        </>
      )}

      {showTopTracks && topTracks.length > 0 && (
        <>
          {showNowPlaying && nowPlaying && <Spacer height={1} />}
          <Spacer height={1} />
          <h3 className='section__title'>Top Tracks</h3>
          <div className='tracks__list'>
            {topTracks.map((track, i) => (
              <TrackCard key={uniqid()} track={track} trackNumber={i + 1} />
            ))}
          </div>
        </>
      )}
    </section>
  ) : null
}

export default Activity
