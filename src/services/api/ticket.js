import client from '.';

export const apiPostCreateTicket = (params) => {
  return client.post('/tickets-nft', params).then((res) => res.data);
};

export const apiPostCheckPoolAfterBet = (params) => {
  return client.post('/check-pool-after-bet', params).then((res) => res.data);
};

export const apiPostClaimTicket = (params) => {
  return client.post('/claim-tickets', params).then((res) => res.data);
};

export const apiPostPendingClaimTicket = (params) => {
  return client.post('/pending-claim-tickets', params).then((res) => res.data);
};

export const apiPostCreateCard = (params) => {
  return client.post('/ticket_cards', { params }).then((res) => res.data);
};

export const apiUpdateTicket = (id, params) => {
  return client.put(`/ticket_cards/${id}`, { params }).then((res) => res.data);
};

export const apiGetTicketsByAddress = (params) => {
  return client
    .get(`/ticket_cardsByAddress`, { params })
    .then((res) => res.data);
};

export const apiGetTicketsByMatchId = (params) => {
  return client
    .get(`/ticket_cardsByMatchId`, { params })
    .then((res) => res.data);
};

export const apiGetTickets = (params) => {
  return client.get('/ticket_cards', { params }).then((res) => res.data);
};

export const apiGetTicketById = (id) => {
  return client.get(`/ticket_cards/${id}`).then((res) => res.data);
};
