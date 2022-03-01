import React,{Component} from 'react';
import * as cartsActions from './../../actions/carts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class PaymentItem extends Component{
	deleteItem = (id,size) => {
		var {cartsActions} = this.props;
		var {deleteCartItem} = cartsActions;
		deleteCartItem(id,size);
	}
	numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	render(){
		var {cart} = this.props;
		return(
			<tr>
				<td className="cartA"><img style={{width: '100px', height: '100px'}} src={cart.img}/></td>
				<td className="cartA">{cart.name}</td>
				<td className="cartA">{cart.size}</td>
				<td className="cartA">{cart.count}</td>
				<td className="cartA">{this.numberWithCommas(cart.price)}</td>
				<td className="cartA">{this.numberWithCommas(cart.totalPrice)}</td>
				<td className="cartA"><button style={{backgroundColor: '#ff3333'}} onClick={() => this.deleteItem(cart.id,cart.size)}>Xóa</button></td>

			</tr>

		);
	}
}
const mapStateToProps = (state) => {
	return{
		carts: state.cartsReducer.list,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		cartsActions: bindActionCreators(cartsActions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentItem);
