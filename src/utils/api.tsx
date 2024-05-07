import * as querystring from 'querystring';

import config from '../config';
import { BAD_REQUEST } from './restCodes';

const BASE_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
};

function post(url: string, data = {}) {
  return _fetch(config.apiURL + url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
}

function put(url: string, data = {}) {
  return _fetch(config.apiURL + url, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
}

async function del(url: string, params = {}) {
  const queryString = '?' + querystring.stringify(params);
  return _fetch(config.apiURL + url + queryString, {
    method: 'DELETE',
    headers: getHeaders(),
  });
}

async function get(url: string, params = {}) {
  const queryString = '?' + querystring.stringify(params);
  return _fetch(config.apiURL + url + queryString, {
    method: 'GET',
    headers: getHeaders(),
  });
}

// @ts-ignore
async function _fetch(url: string, options: any) {
  const res = await fetch(url, options);

  if (res.status >= BAD_REQUEST) {
    throw res.status;
  }
  return res.json();
}

function getHeaders(noAuthorization = false) {
  const token = '';

  if (token && !noAuthorization) {
    return {
      ...BASE_HEADERS,
      authorization: `Bearer ${token}`,
    };
  }
  return BASE_HEADERS;
}

export function uploadMediaToAWS(
  presignedURL: string,
  file: any,
): Promise<XMLHttpRequest> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('PUT', presignedURL);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        resolve(xhr);
      } else if (xhr.status !== 200) {
        console.warn(xhr.response);
        reject(xhr.status);
      }
    };

    xhr.setRequestHeader('Content-Type', 'multipart/form-data');

    xhr.send(file);
  });
}
