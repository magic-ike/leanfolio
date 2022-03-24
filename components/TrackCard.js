const TrackCard = ({ track }) => {
  const trackIsNotPlaying = track.isPlaying === false
  const Component = trackIsNotPlaying ? 'div' : 'a'
  return (
    <Component
      className='track'
      href={track.songUrl}
      target='_blank'
      rel='noreferrer'
    >
      <img
        className='track__photo'
        src={trackIsNotPlaying ? '/assets/spotify.svg' : track.albumImageUrl}
        alt='spotify'
      />
      <h4>
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
