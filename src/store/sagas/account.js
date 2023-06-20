import {put, call, takeLatest, select, all} from 'redux-saga/effects';
import {
  apiGetEmployees
} from '@services/api/account';
import {
  GET_EMPLOYEE_DATA,
  setDataAccountToStoreAction,
  updateEmployeeDataAction
} from '@store/modules/account';
import {updateLoadingScreen} from '@store/modules/common';
import {ApiStatus} from '@constants';
import DropdownService, {DropdownAlertType} from '@services/dropdown';


function* getEmployeeData({query, isLoadMore}) {
  try {
    yield put(updateLoadingScreen(true));
    yield put(setDataAccountToStoreAction({loadingStatusEmployee: 'loading'}));
    const res = yield call(apiGetEmployees, query);
    if (res?.status !== ApiStatus.SUCCESS) {
      throw new Error('Không thể lấy dữ liệu!');
    }
    if (isLoadMore) {
      yield put(updateEmployeeDataAction(res.data));
    } else {
      yield put(setDataAccountToStoreAction({dataEmployees :res.data}));
    }
    yield put(setDataAccountToStoreAction({loadingStatusEmployee: 'success'}));
  } catch (e) {
    yield put(setDataAccountToStoreAction({loadingStatusEmployee: 'error'}));
    DropdownService.alert(
      DropdownAlertType.ERROR,
      '',
      e?.message || 'Không thể lấy được dữ liệu',
    );
  } finally {
    yield put(updateLoadingScreen(false));
  }
}

function* AccountSaga() {
  // yield takeLatest(GET_EMPLOYEE_DATA, getEmployeeData);
}

export default AccountSaga;
