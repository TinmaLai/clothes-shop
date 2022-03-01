// import * as taskApis from './../apis/tasks';
import * as actionsTypes from './../constants/products';

export const getListTask = () => {
	return{
		type: actionsTypes.GET_PRODUCTS,
	}
}

export const updateProduct = (product) => {
	return{
		type: actionsTypes.UPDATE_PRODUCT,
		payload:{
			product
		}
	}
}

export const updateProductSuccess = () => {
	return{
		type: actionsTypes.UPDATE_PRODUCT_SUCCESS,
		
	}
}

export const updateProductFailed = (error) => {
	return{
		type: actionsTypes.UPDATE_PRODUCT_FAILED,
		payload: error,
	}
}

export const getListTaskSuccess = (data) => {
	return{
		type: actionsTypes.GET_PRODUCTS_SUCCESS,
		payload:{
			data
		}
	}
}


export const getListTaskFailed = (error) => {
	return{
		type: actionsTypes.GET_PRODUCTS_FAILED,
		payload:{
			error
		}
	}
}
