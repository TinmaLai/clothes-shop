import React,{Component} from 'react';
import './style.css';
import Shirt from './../Products/ShirtList/index';
import {bindActionCreators} from 'redux';
import * as productsActions from './../../actions/products';
import {connect} from 'react-redux';
class ProductsList extends Component{
	// componentDidMount(){
	// 	const {productsActions} = this.props;
	// 	var {getListTask} = productsActions;
	// 	getListTask();
		
	// }

	render(){
		var {shirts} = this.props;
		var {match, location} = this.props;

		return(
			<div className="product-container">
				<Shirt match={match} location={location}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return{
		shirts: state.shirtsReducer.list,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		productsActions: bindActionCreators(productsActions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);