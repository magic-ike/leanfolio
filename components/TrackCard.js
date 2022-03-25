const TrackCard = ({ track, trackNumber }) => {
  const trackIsNotPlaying = track.isPlaying === false
  const Component = trackIsNotPlaying ? 'div' : 'a'
  return (
    <Component
      className='track'
      href={track.songUrl}
      target='_blank'
      rel='noreferrer'
    >
      {trackNumber && <h4 className='track__margin__right'>{trackNumber}</h4>}
      <img
        className='track__photo track__margin__right'
        src={trackIsNotPlaying ? '/assets/spotify.svg' : track.albumImageUrl}
        alt='spotify'
      />
      <h4 className='track__artist'>
        {trackIsNotPlaying ? (
          'Nothing'
        ) : (
          <>
            <span className='text--strong'>{track.title}</span> by{' '}
            <span className='text--strong'>{track.artist}</span>
          </>
        )}
      </h4>
    </Component>
  )
}

export default TrackCard
