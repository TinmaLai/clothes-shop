import axios from 'axios';

class axiosService{
	constructor(){
		const instance = axios.create();
		instance.interceptors.response.use(this.handleSuccess, this.handleFailed);
		this.instance = instance;
	}
	handleSuccess(response){
		return response;
	}
	handleFailed(err){
		return Promise.reject(err);
	}
	get(url){
		return this.instance.get(url)
	}
	put(url, product){
		return this.instance.put(url,product);
	}
}	

export default new axiosService;