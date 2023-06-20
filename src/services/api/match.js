import client from '.';

export const apiPostCreateMath = params => {
  return client
    .post('/matches', {params})
    .then(res => res.data);
};

export const apiUpdateMath = (id, params) => {
  return client
    .put(`/matches/${id}`, {params})
    .then(res => res.data);
};

export const apiGetMatchesByDay = (params) => {
  return client.get('/matchesByDay',{params}).then(res => res.data);
};

export const apiGetMatches = (params) => {
  return client.get('/matches',{params}).then(res => res.data);
};

export const apiGetMatchById = (id) => {
  return client.get(`/matches/${id}`).then(res => res.data);
};

