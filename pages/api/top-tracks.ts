import type { NextApiRequest, NextApiResponse } from 'next'
import { spotifyCredsAreValid, getTopTracks } from '../../lib/spotify'

import Filter from 'bad-words'
const filter = new Filter()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!spotifyCredsAreValid) res.json([])

  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 3).map((track) => ({
    title: filter.clean(track.name),
    artist: track.artists
      .map((_artist) => filter.clean(_artist.name))
      .join(', '),
    albumImageUrl: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json(tracks)
}
