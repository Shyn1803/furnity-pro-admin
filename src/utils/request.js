// import {fetch} from 'dva';
// import api from '../../config/api';

// function parseJSON(response) {
//   return response.json();
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

// /**
//  * Requests a URL, returning a promise.
//  *
//  * @param  {string} url       The URL we want to request
//  * @param  {object} [options] The options we want to pass to "fetch"
//  * @return {object}           An object containing either "data" or "err"
//  */
// export default function request(url, options) {
//   console.log('url: ', url);
//   console.log('options: ', options);
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => ({ data }))
//     .catch(err => ({ err }));
// }

/**
 * request
 * Ref: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import api from '../../config/api';

const { REACT_APP_ENV } = process.env;

/**
 * Error handling
 */

const errorHandler = (error) => {
  const { response } = error;

  if (response && response.status) {
    const errorText = response.statusText;
    const { status, url } = response;
    notification.error({
      message: `Error ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'Your network is abnormal and cannot connect to the server',
      message: 'Network is down',
    });
  }

  return response;
};

/**
 * request
 */

const request = extend({
  prefix: api[REACT_APP_ENV || 'dev'].baseUrl,
  errorHandler,
  credentials: 'include', // Default send cookie
});
export default request;
