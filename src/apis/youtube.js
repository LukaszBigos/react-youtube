import axios from 'axios';

const KEY = 'AIzaSyDEdzGM3h6batKkCCiUOhoEtQqtwMbtPSA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});