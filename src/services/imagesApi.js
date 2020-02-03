const URL = 'https://pixabay.com/api/';
const API_KEY = '14594113-3565582ddf884392468dadf7f';

const fetchImagesWithQuery = async (query, page = 1) => {
  const requestParams = `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`;
  const resp = await fetch(URL + requestParams);
  const { hits } = await resp.json();
  return hits;
};

export default { fetchImagesWithQuery };
