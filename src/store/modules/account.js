export const CONNECT_WALLET_SUCCESS = 'CONNECT_WALLET_SUCCESS';
export const CONNECT_WALLET_FAIL = 'CONNECT_WALLET_FAIL';
export const SET_WALLET_ADDRESS = 'SET_WALLET_ADDRESS';
export const SET_BALANCE_BUSD = 'SET_BALANCE_BUSD';
export const SET_ICON = 'SET_ICON';

const defaultState = {
  walletConnected: false,
  walletAddress: '',
  balanceBUSD: 0,
  icon: '',
};

export default function accountReducer(state = defaultState, action) {
  switch (action.type) {
    case CONNECT_WALLET_SUCCESS: {
      return {
        ...state,
        walletConnected: true,
      };
    }
    case CONNECT_WALLET_FAIL: {
      return {
        ...state,
        walletConnected: false,
      };
    }
    case SET_WALLET_ADDRESS: {
      return {
        ...state,
        walletAddress: action.payload,
      };
    }
    case SET_BALANCE_BUSD: {
      return {
        ...state,
        balanceBUSD: action.payload,
      };
    }
    case SET_ICON: {
      return {
        ...state,
        icon: action.payload,
      };
    }

    default:
      return state;
  }
}

export const walletConnectSuccess = (data) => ({
  type: CONNECT_WALLET_SUCCESS,
  data,
});

export const walletConnectFail = (data) => ({
  type: CONNECT_WALLET_FAIL,
  data,
});

export const setWalletAddress = (payload) => ({
  type: SET_WALLET_ADDRESS,
  payload,
});

export const setBalanceBUSD = (payload) => ({
  type: SET_BALANCE_BUSD,
  payload,
});
export const setIcon = (payload) => ({
  type: SET_ICON,
  payload,
});
