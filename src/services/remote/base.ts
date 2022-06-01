import axios from 'axios';

const BASEURL = 'https://sopterest.ml';

const baseHeaders = {
  Accept: `*/*`,
  'Content-Type': `application/json`,
};

const baseMultipartHeaders = {
  Accept: `*/*`,
  'Content-Type': `multipart/form-data`,
};

interface Request {
  url: string;
  headers?: object;
  method: 'get' | 'post' | 'put' | 'delete';
}

interface RequestWithParams extends Request {
  params?: object;
}

interface RequestWithData extends Request {
  data?: object;
  type?: 'multipart' | 'json';
}

const sendRequest = ({ url, params, method, headers }: RequestWithParams) => {
  return axios[method](BASEURL + url, {
    headers: { ...baseHeaders, ...headers },
    params,
  }).then((response) => {
    return { ...response.data, axiosStatus: response.status };
  });
};

const sendRequestWithData = ({ url, data, method, headers, type }: RequestWithData) => {
  return axios[method](BASEURL + url, data, {
    headers: { ...(type === 'json' ? baseHeaders : baseMultipartHeaders), ...headers },
  }).then((response) => {
    return response.data;
  });
};

const sendRequestForDelete = ({ url, data, headers }: Omit<RequestWithData, 'method'>) => {
  return axios
    .delete(BASEURL + url, {
      headers: { ...baseHeaders, ...headers },
      data: data,
    })
    .then((response) => {
      return response.data;
    });
};

export const API = {
  get: ({ url, params, headers }: Omit<RequestWithParams, 'method'>) =>
    sendRequest({ url, params, method: 'get', headers }),
  post: ({ url, data, headers, type }: Omit<RequestWithData, 'method'>) =>
    sendRequestWithData({
      url,
      data,
      method: 'post',
      headers,
      type: type ?? 'json',
    }),
  put: ({ url, data, headers, type }: Omit<RequestWithData, 'method'>) =>
    sendRequestWithData({
      url,
      data,
      method: 'put',
      headers,
      type: type ?? 'json',
    }),
  delete: ({ url, data, headers }: Omit<RequestWithData, 'method'>) =>
    sendRequestForDelete({
      url,
      data,
      headers,
    }),
};
