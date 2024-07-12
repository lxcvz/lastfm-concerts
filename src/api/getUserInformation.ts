export const getUserInformation = async (username: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
  const API_URL = process.env.NEXT_PUBLIC_LASTFM_API_URL;

  const response = fetch(
    `${API_URL}?method=user.getinfo&user=${username}&api_key=${API_KEY}&format=json`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return response;
};
