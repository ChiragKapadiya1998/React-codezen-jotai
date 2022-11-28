import axios from 'axios';

export const makeAPIRequest = (
  method: string,
  url: string,
  data: unknown,
  headers: unknown,
  params: unknown,
  baseURL: string,
) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method,
      baseURL,
      url,
      data,
      headers: headers,
      params,
    };
    axios(options)
      .then(response => {
        if (response.status === 200) {
          resolve(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
