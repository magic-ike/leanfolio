# Spotfolio

A portfolio template built with React that uses the Spotify API to let you also showcase the song you're currently listening to, as well as your top 3 tracks. If sharing personal metrics isn't your style, then check out [the original repo](https://github.com/rajshekhar26/cleanfolio) that this is forked from. However, if you run into any issues setting up that project locally or deploying, the instructions on this README might be more helpful.

## Preview

[![Imgur]()]()

[Live Demo (My Portfolio Site)](https://iodev.io)

## Instructions

### Setup

Clone the repo

```shell
git clone https://github.com/magic-ike/spotfolio
cd spotfolio
```

Install the dependencies

```shell
npm install # for npm
yarn # for yarn
```

Start the server

```shell
npm run start # for npm
yarn start # for yarn
```

**Note:** If you're using Node version 17+, you should instead be using the Node v17+ versions of the React scripts `start`, `build`, `test`, and `eject` (they're denoted by the `:n17` suffix). The above code would instead be:

```shell
npm run start:n17 # for npm
yarn start:n17 # for yarn
```

### Making Changes

- Open `public/index.html` and replace `<title>John Smith</title>` with `<title>Your Name</title>`.

- Open `src/portfolio.js` and replace the dummy data with your own.

### Deployment

- Open `package.json` and replace `"homepage": "https://magic-ike.github.io/spotfolio"` with `"homepage": "https://your_github_username.github.io/your_repo_name"`.

- Build

```shell
npm run build # for npm
yarn build # for yarn
```

- Deploy

```shell
npm run deploy # for npm
yarn deploy # for yarn
```

### Spotify

To get the Spotify data to populate, you'll need to create a `.env.local` file in your root directory and add the add the following code:

```shell
SPOTIFY_CLIENT_ID=$CLIENT_ID
SPOTIFY_CLIENT_SECRET=$CLIENT_SECRET
SPOTIFY_REFRESH_TOKEN=$REFRESH_TOKEN
```

To get the Client ID, Client Secret, and Refresh Token, you'll need to do the following:

- Go to your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and log in.

- Click **Create an App**.

- Fill out the name and description and click **Create**.

- Click **Show Client Secret**.

- You now have the Client ID and Client Secret. Save these for later.

- Click **Edit Settings**.

- Add `http://localhost:3000` as a redirect URI and click **Save**.

- Navigate to the following URL in your browser (replace `$CLIENT_ID` with your actual Client ID):

```shell
https://accounts.spotify.com/authorize?client_id=$CLIENT_ID&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20
user-top-read
```

- After authorizing, you should be redirected to your redirect URI. In the URL, there should be a **very long** `code` query parameter like so:

> localhost:3000/?**code=NApCCg..BkWtQ**

- The value is your Authorization Code. Save it for later.

- Now we're ready to get the Refresh Token. Run the following command in your terminal (replace `$CLIENT_ID`, `$CLIENT_SECRET`, and `$CODE` with your actual Client ID, Client Secret, and Authorization Code respectively)

```shell
curl -d client_id=$CLIENT_ID -d client_secret=$CLIENT_SECRET -d grant_type=authorization_code -d code=$CODE -d redirect_uri=http://localhost:3000 https://accounts.spotify.com/api/token
```

- You should get the following JSON response:

```shell
{
    "access_token": "$ACCESS_TOKEN",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "$REFRESH_TOKEN",
    "scope": "playlist-modify-private"
}
```

- Save $REFRESH_TOKEN as this is your Refresh Token. This token will last for a very long time unless you revoke access.

- After running the last command, you may instead get the following output:

```shell
{
    "error": "invalid_grant",
    "error_description": "Authorization code expired"
}
```

- In that case, just repeat the step where you navigate to the `https://accounts.spotify.com/authorize...` URL in your browser, then repeat the steps after that.

- If everything went smoothly, you should now have the Client ID, Client Secret, and Refresh Token. Plug those 3 credentials into the `.env.local` file and you should be good to go. 🎉

## License

[MIT](https://choosealicense.com/licenses/mit/)
