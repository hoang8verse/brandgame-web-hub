import {REHYDRATE} from 'redux-persist';
export const SET_NFT_CARDS = 'SET_NFT_CARDS';
export const GET_NFT_CARDS = 'GET_NFT_CARDS';
export const SET_REFERRAL_CODE = 'SET_REFERRAL_CODE';
export const SET_REFERRAL_DATA = 'SET_REFERRAL_DATA';
export const SET_SEASON_POOL = 'SET_SEASON_POOL';
export const GET_SEASON_POOL = 'GET_SEASON_POOL';

const defaultState = {
  nftCards: [],
  referralCode: "",
  referral : {
    isRewarded : 0,
    isClaimed : 0
  },
  seasonPool: 0,
};

export default function commonReducer(state = defaultState, action) {
  switch (action.type) {
    case REHYDRATE:
      return defaultState;
    case SET_NFT_CARDS:
      return {
        ...state,
        nftCards: action.data,
      };
      case SET_REFERRAL_CODE:
        return {
          ...state,
          referralCode: action.data,
        };
      case SET_REFERRAL_DATA:
        return {
          ...state,
          referral: action.data,
        };
      case SET_SEASON_POOL:
        return {
          ...state,
          seasonPool: action.data,
        };
    default:
      return state;
  }
}

// action creators
export const setNftCards = (data)=> ({
  type: SET_NFT_CARDS,
  data,
});
export const getNftCards = ()=> ({
  type: GET_NFT_CARDS,
});

export const setReferralCode = (data)=> ({
  type: SET_REFERRAL_CODE,
  data,
});

export const setReferralData = (data)=> ({
  type: SET_REFERRAL_DATA,
  data,
});

export const setSeasonPool = (data)=> ({
  type: SET_SEASON_POOL,
  data,
});
export const getSeasonPool = ()=> ({
  type: GET_SEASON_POOL,
});
