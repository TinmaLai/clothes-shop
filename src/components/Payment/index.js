 
import React, {Component} from 'react';
import * as cartsActions from './../../actions/carts';
import {connect} from 'react-redux';
import './stylePayment.css';
import {bindActionCreators} from 'redux';
import PaymentItem from './../PaymentItem/index';
import InforShipping from './../InforShipping/index';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Payment extends Component {
    render() {
    	var {carts} = this.props;
    	var cartsList = null;
    	if(carts.length > 0)
	    	cartsList = carts.map((cart, index) => {
	    		return <PaymentItem cart={cart} key={index}/>
	    	});

        return (
            <div className="maina">
                <table className="mainTable" border="0">
                	<thead>
                		<tr>
	                		<th>Hình ảnh</th>
	                		<th>Tên sản phẩm</th>
	                		<th>Kích cỡ</th>
	                		<th>Số lượng</th>
	                		<th>Đơn giá</th>
	                		<th>Thành tiền</th>
	                		<th>Thao tác</th>
                		</tr>
                	</thead>
                	<tbody>
                		{cartsList}
                	</tbody>
                </table>
                <div style={{display: 'flex', flexDirection:'row',justifyContent:'space-between'}} >
                	<textarea name="" placeholder="Chú thích..." cols="100" rows="5" style={{backgroundColor: '#e0e0d1',border:'none', padding: '5px' }}></textarea>
                	<Link to="/InforShipping"><button className="payment">THANH TOÁN</button></Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(Payment);
