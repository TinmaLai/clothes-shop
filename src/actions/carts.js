import * as actionsTypes from './../constants/carts';

export const addCartItem = (item) => {
	return{
		type: actionsTypes.ADD_ITEM,
		item,
	}
}

export const deleteCartItem = (id,size) => {
	return{
		type: actionsTypes.DELETE_ITEM,
		id,
		size,
	}
}