import { APP_ID, APP_KEY } from '../.secret';
import axios from 'axios';

export const getApi = (query, currentPage) =>
  axios({
    method: 'GET',
    url: `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${(currentPage -
      1) *
      10}&to=${10 * currentPage - 1}
`
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });

export const getApiDetail = (query, index) =>
  axios({
    method: 'GET',
    url: `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${index}&to=${index +
      1}`
  })
    .then(res => {
      return res.data.hits;
    })
    .catch(err => {
      console.log(err);
    });
