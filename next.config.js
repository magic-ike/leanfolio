module.exports = {
  async redirects() {
    return [
      {
        source: '/(s-d-c|sdc)',
        destination: 'https://data-card-for-spotify.herokuapp.com',
        permanent: false,
        basePath: false,
      },
    ]
  },
}
