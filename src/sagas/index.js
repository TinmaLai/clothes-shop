import {fork, take, call, put, delay, takeLatest} from 'redux-saga/effects';
import * as actionsTypes from './../constants/products';
import {getList, updateProduct} from './../apis/shirts';
import {STATUS_RES} from './../constants/index';
import {getListTaskSuccess, getListTaskFailed, updateProductSuccess, updateProductFailed} from './../actions/products';

function* watchFetchListTaskAction(){
	while(true){
		yield take(actionsTypes.GET_PRODUCTS);
		// from here be blocked
		const resp = yield call(getList);
		const {status, data} = resp;
		if(status == STATUS_RES.SUCCESS) {
			// dispatch type get success
			yield put(getListTaskSuccess(resp));
			console.log('get list thanh cong');
		} else{
			// dispatch type get failed
			yield put(getListTaskFailed(resp));
		}
		// yield delay(500);
	}
}
function* watchUpdateProductAction(payload){
	// while(true){
	// 	yield take(actionsTypes.UPDATE_PRODUCT);
		var productUpdate = payload.product;
		// console.log(payload);
		const resp = yield call(updateProduct,productUpdate.id,productUpdate);
		const {status} = resp;
		if(status == STATUS_RES.SUCCESS){
			yield put(updateProductSuccess());
			console.log('update thanh cong');
		} else {
			yield put(updateProductFailed(resp));
		}
		
	// }
}


function* watchCreateTaskAction(){
	console.log('create task');
}

function* onUpdateProduct(){
	while(true){
		const action = yield take(actionsTypes.UPDATE_PRODUCT);
		yield fork(watchUpdateProductAction, action.payload);
	}
}

function* rootSaga(){
	yield fork(watchFetchListTaskAction);
	yield fork(watchCreateTaskAction);
	yield fork(onUpdateProduct);
}



export default rootSaga;