import {combineReducers} from 'redux';
import shirtsReducer from './shirts';
import cartsReducer from './carts';

const myReducers = combineReducers({
	shirtsReducer,
	cartsReducer,
});

export default myReducers;