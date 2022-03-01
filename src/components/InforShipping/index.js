import React,{Component} from 'react';
import './styleInforShipping.css';
import{
	Link
} from 'react-router-dom';
import{connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartsActions from './../../actions/carts';
class InforShipping extends Component{
	numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	render(){
		var {carts} = this.props;
		console.log(carts);
		var cartsList = null;
		var totalCheckout = 0;
		if(carts.length > 0){
			cartsList = carts.map((cart,index) => {
				totalCheckout += cart.totalPrice;
				return <div className="cartItem">
					<img src={cart.img}/>
					<span>{cart.name}</span>
					<small>Cỡ: {cart.size}</small>
					<div className="count">{cart.count}</div>
					<div className="totalPrice">{this.numberWithCommas(cart.totalPrice)}   ₫</div>
				</div>
			})
		}
		return(
			<div className="container">
				<h3>Thông tin giao hàng</h3>
				<div className="infor">
					<div>
						<input type="text" placeholder="Họ và tên" style={{width: '100%'}}/>
						<div className="emailSDT">
							<input type="text" placeholder="Email" style={{width: '75%', marginRight: '8px'}}/>
							<input type="text" placeholder="Số điện thoại" style={{width: '20%'}}/>
						</div>
						<input type="text" placeholder="Địa chỉ" style={{width: '100%'}}/>
						<div>
							<select name="calc_shipping_provinces" required="">
							  	<option value="">Tỉnh / Thành phố</option>
							</select>
							<select name="calc_shipping_district" required="">
							  	<option value="">Quận / Huyện</option>
							</select>
							<input className="billing_address_1" name="" type="hidden" value=""/>
							<input className="billing_address_2" name="" type="hidden" value=""/>
						</div>
						<textarea name="" id="" cols="30" rows="10" placeholder="Ghi chú gì đó cho shop hihi..."></textarea>
						<div>
							Vui lòng thanh toán khi nhận được hàng
						</div>
						<div>
							<Link to=""><button>Xác nhận</button></Link>
						</div>
					</div>
					<div className="itemSide">
					    <div className="cartBlock">
							{cartsList}
							<hr/>
							<div className="checkoutPrice">
								<span>Tổng cộng</span>
								<div>{this.numberWithCommas(totalCheckout)}   ₫</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		);
	}
}

const mapStateToProps = (state) => {
	return{
		carts: state.cartsReducer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		cartsActions: bindActionCreators(cartsActions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(InforShipping);