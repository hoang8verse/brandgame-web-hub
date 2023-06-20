import client from '.';


export const apiGetNftCards = (params) => {
  return client.get('/cards',{params}).then(res => res.data);
};

export const apiGetSeasonPool = (params) => {
  return client.get('/season-lottery',{params}).then(res => res.data);
};

export const apiCheckReferralCode= params => {
  return client
    .post('/referrals-check', params)
    .then(res => res.data);
};

export const apiReferralUpdateClaimed= params => {
  return client
    .post('/referrals-update-claimed', params)
    .then(res => res.data);
};

export const apiReferralByAddress = (params) => {
  return client.get('/referral-by-address',{params}).then(res => res.data);
};

