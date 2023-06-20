import {put, call, takeLatest, select, all} from 'redux-saga/effects';
import {
  apiGetNftCards,
  apiGetSeasonPool
} from 'services/api/common';
import {
  GET_NFT_CARDS,
  setNftCards,
  GET_SEASON_POOL,
  setSeasonPool,

} from 'store/modules/common';
// import {updateLoadingScreen} from 'store/modules/common';
import {ApiStatus} from 'constant';


function* GetNftCards() {
  try {
    // yield put(updateLoadingScreen(true));

    const res = yield call(apiGetNftCards);

    if (res?.status !== ApiStatus.SUCCESS) {
      throw new Error('Không thể lấy dữ liệu!');
    }

    yield put(setNftCards(res.data));

  } catch (e) {

    yield put(setNftCards([]));

  } finally {
    // yield put(updateLoadingScreen(false));
  }
}

function* GetSeasonPool() {
  try {
    // yield put(updateLoadingScreen(true));

    const res = yield call(apiGetSeasonPool);

    if (res?.status !== ApiStatus.SUCCESS) {
      throw new Error('Không thể lấy dữ liệu!');
    }
    // console.log("GetSeasonPool data ", res.data)
    let seasonPool = parseFloat(res?.data.base_pool) + parseFloat(res?.data.current_pool); 
    yield put(setSeasonPool(seasonPool));

  } catch (e) {

    yield put(setSeasonPool(0));

  } finally {
    // yield put(updateLoadingScreen(false));
  }
}

function* CommonSaga() {
  yield takeLatest(GET_NFT_CARDS, GetNftCards);
  yield takeLatest(GET_SEASON_POOL, GetSeasonPool);
}

export default CommonSaga;
