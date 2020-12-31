// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "6113ebd1d4c4489d989a39fde5263cde";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// `https://accounts.spotify.com/authorize?client_id=6113ebd1d4c4489d989a39fde5263cde&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-read-recently-playing%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true`;
