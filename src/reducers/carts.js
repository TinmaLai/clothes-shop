import * as actionTypes from './../constants/carts';
	
const initialState = [];

const cartsReducer = (state = initialState, actions) => {
	switch(actions.type){
		case actionTypes.ADD_ITEM:{
			var test = true;
			for(let i = 0; i < state.length; i++){
				if(actions.item.id === state.[i].id && actions.item.size === state.[i].size){
					state.[i].amount = parseInt(state.[i].amount) + parseInt(actions.item.amount);
					state.[i].totalPrice = state.[i].totalPrice + actions.item.totalPrice;
					test = false;
					break;
				}
			}
			if(test == true) state.push(actions.item);
			return [...state]
		}
		case actionTypes.DELETE_ITEM:{
			var id = actions.id;
			var size = actions.size;
			for(let index = 0; index < state.length; index++){
				if(state.[index].id === id && state.[index].size === size){
					var temp = [];
					for(let i = state.length - 1; i >= index; i--){
						temp.push(state.pop());
					}
					for(let i = temp.length - 2; i >= 0; i--){
						state.push(temp[i]);
					}
					// console.log(state.);
					return [...state];
				}
			}

			// console.log(actions.id);
			return state;
		}
		default:
			return state;
	}
}

export default cartsReducer;