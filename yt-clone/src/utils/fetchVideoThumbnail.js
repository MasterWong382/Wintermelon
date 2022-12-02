import axios from 'axios';

async function fetchVideoThumbnail() {
  const res = await axios.get('https://dog.ceo/api/breeds/image/random');
  const url = res.status === 200 ? res.data.message : null;
  return url;
}

export default fetchVideoThumbnail;
