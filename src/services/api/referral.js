import client from '.';

export const apiGetStatistic = (wallet) => {
  return client.get(`${process.env.REACT_APP_API_REF_URL}/v1/referral/${wallet}/statistic`).then(res => res.data);
};

export const apiGetClaimStatus = (wallet) => {
  return client.get(`${process.env.REACT_APP_API_REF_URL}/v1/referral/claim-status`, {params: {walletAddress: wallet}}).then(res => res.data);
};

export const apiGetHistory = (params) => {
  return client.get(`${process.env.REACT_APP_API_REF_URL}/v1/referral/histories`, { params }).then(res => res.data);
};

export const apiGetClaimedHistory = (params) => {
  return client.get(`${process.env.REACT_APP_API_REF_URL}/v1/referral/claim-histories`, { params }).then(res => res.data);
};

export const apiClaim = (payload) => {
  return client.post(`${process.env.REACT_APP_API_REF_URL}/v1/referral/claim`, payload).then(res => res.data?.data);
};
