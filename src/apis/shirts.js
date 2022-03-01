
import axiosService from './../commons/axiosService';
import {API_ENDPOINT} from './../constants/index';

const url = 'shirts';

export const getList = () => {
	console.log('get list api...');
	return axiosService.get(`${API_ENDPOINT}/${url}`);

}
export const updateProduct = (productId, product) => {
	console.log('update product...');
	return axiosService.put(`${API_ENDPOINT}/${url}/${productId}`,product);
}