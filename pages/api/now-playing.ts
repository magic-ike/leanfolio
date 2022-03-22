import type { NextApiRequest, NextApiResponse } from 'next'
import { getNowPlaying } from '../../lib/spotify'

import Filter from 'bad-words'
const filter = new Filter()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song = await response.json()

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false })
  }

  const track = {
    isPlaying: song.is_playing,
    title: filter.clean(song.item.name),
    artist: song.item.artists
      .map((_artist) => filter.clean(_artist.name))
      .join(', '),
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ track })
}
