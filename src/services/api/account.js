import client from '.';

export const apiPostIdentification = params => {
  return client
    .post('/submit-identification', params)
    .then(res => res.data);
};

export const apiGetUserData = () => {
  return client.get('/auth/me').then(res => res.data);
};

