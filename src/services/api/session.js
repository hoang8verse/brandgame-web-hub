import querystring from 'querystring';
import client from '.';

export const apiLogin = (username, password) => {
  return client
    .post('/auth/login', querystring.stringify({username, password}))
    .then(res => res.data);
};

export const apiSignup = ({
  username,
  password,
}) => {
  return client
    .post(
      '/auth/register',
      querystring.stringify({
        username,
        password,
      }),
    )
    .then(res => res.data);
};

export const apiLogout = params => {
  return client.post('/auth/logout', params).then(res => res.data);
};


export const apiGetDashboard = () => {
  return client.get('/dashboard').then(res => res.data);
};

