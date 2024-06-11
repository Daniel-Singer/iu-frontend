import axios from 'axios';

const accessToken = sessionStorage.getItem('auth_token');

axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

export default axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
