

import * as actionTypes from './../constants/products';

const initialState = {
	list:[]
}

const shirtsReducer = (state = initialState, actions) => {
	switch(actions.type){
		case actionTypes.GET_PRODUCTS:{
			return{
				...state,
				list: [],
			}
		}
		case actionTypes.UPDATE_PRODUCT:{
			console.log(actions);
			
			return{
				...state,
			}
		}
		case actionTypes.GET_PRODUCTS_SUCCESS:{
			return{

				...state,
				list: actions.payload.data.data

			}
			// console.log(actions.payload.data.data)
		}
		case actionTypes.UPDATE_PRODUCT_FAILED:
		case actionTypes.GET_PRODUCTS_FAILED:{
			return{
				...state,
				error: actions.payload
			}
		}
		default:
		return state;
	}
}

export default shirtsReducer;