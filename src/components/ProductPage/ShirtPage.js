import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styleSP.css';
import {bindActionCreators} from 'redux';
import * as productsActions from './../../actions/products';
import * as cartsActions from './../../actions/carts';
import StarBorder from '@material-ui/icons/StarBorder';

class ShirtPage extends Component{
	numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	sizePicker = (sizeNumber) => {
		var sizes = document.getElementsByClassName("size-item");
		switch(sizeNumber){
			case 1: 
				sizes[0].style.border = "solid #1a8cff";
				sizes[1].style.border = "solid gray";
				sizes[2].style.border = "solid gray";
				
				break;
			case 2:
				sizes[1].style.border = "solid #1a8cff";
				sizes[0].style.border = "solid gray";
				sizes[2].style.border = "solid gray";
				
				break;
			case 3:
				sizes[2].style.border = "solid #1a8cff";
				sizes[0].style.border = "solid gray";
				sizes[1].style.border = "solid gray";
				
				break;
		}
	}	

	increase = () => {
		var current = document.getElementsByTagName("input")[1].value;
		var element =  document.getElementsByTagName("input")[1];
		element.value = parseInt(current) + 1;
	}
	decrease = () => {
		if(parseInt(document.getElementsByTagName("input")[1].value) > 1){
			var current = document.getElementsByTagName("input")[1].value;
			var element =  document.getElementsByTagName("input")[1];
			element.value = parseInt(current) - 1;
		}
	}
	changeHandler = (event) => {
		console.log(event);
	}
	buyHandler = () => {
		var {shirts, match} = this.props;
		var cartItem = null;
		var name = '', size = '', count = 0, img = '', price = 0, totalPrice = 0, id = 0;
		for(let i = 0; i < shirts.length;i++){
			if(shirts[i].id == match.params.id){
				name = shirts[i].name;
				img = shirts[i].img;
				price = shirts[i].price;
				id = shirts[i].id;
				break;
			}
		}
		count = document.getElementById("count").value;
		totalPrice = price * count;
		var size = 'XXL';
		var sizes = document.getElementsByClassName("size-item");
		for(let i = 0; i < sizes.length; i++){
			if(sizes[i].style.border == 'solid rgb(26, 140, 255)'){
				size = sizes[i].innerText;
				break;
			}
		}

		cartItem = {
			id:id,
			name:name,
			img:img,
			size:size,
			count:count,
			price:price,
			totalPrice:totalPrice

		};
		var {cartsActions} = this.props;
		var {addCartItem} = cartsActions;
		addCartItem(cartItem);
		var popup = document.getElementById('pop-up');
		popup.style.display = 'none';
		popup.style.display = 'block';
	}
	rate = (score,product) => {
		let {productsActions} = this.props;
		var {updateProduct} = productsActions;
		var productRating = parseInt(product.rating);
		if(productRating == 0){
			productRating = score
		} else{
			productRating = (productRating + score)/2;
		}
		product.rating = parseInt(productRating);
		updateProduct(product);
	}

	starHover = (stt) => {
		let stars = document.getElementsByClassName("fa-star");
		if(stars[stt].classList.value.includes(" star") == false){
			for(let i = 0; i <= stt; i++){
				stars[i].classList.add("star");
			}
		}
		// console.log(stars[stt]);
	}
	starOff = () =>{
		let stars = document.getElementsByClassName("fa-star");
		for(let i = 0; i < stars.length; i++){
			if(stars[i].classList.value.includes(" star") == true){
				stars[i].classList.remove("star");
			}
		}
	}
	render(){
		var {match} = this.props;
		var {shirts} = this.props;
		// console.log(shirts);
		var thisProduct = null;
		for(let i = 0; i < shirts.length;i++){
			if(shirts[i].id == match.params.id){	
				thisProduct = shirts[i];
				break;
			}
		}
		
		// console.log(thisProduct);
		return(
			<div>
				<div className="main">
					<img  className="img" src={`./../../../imgs/ao${thisProduct.id}.jpg`}/>
					<div className="information">
						<h1>{thisProduct.name}</h1>
						<h3>{this.numberWithCommas(thisProduct.price)}   ₫</h3>
						<div className="starElements">
							<span onMouseOut={this.starOff} onMouseOver={() => this.starHover(0)} onClick={() => this.rate(1,thisProduct)} className="fa fa-star"></span>
							<span onMouseOut={this.starOff} onMouseOver={() => this.starHover(1)} onClick={() => this.rate(2,thisProduct)} className="fa fa-star"></span>
							<span onMouseOut={this.starOff} onMouseOver={() => this.starHover(2)} onClick={() => this.rate(3,thisProduct)} className="fa fa-star"></span>
							<span onMouseOut={this.starOff} onMouseOver={() => this.starHover(3)} onClick={() => this.rate(4,thisProduct)} className="fa fa-star"></span>
							<span onMouseOut={this.starOff} onMouseOver={() => this.starHover(4)} onClick={() => this.rate(5,thisProduct)} className="fa fa-star"></span>
						</div>
						<p>{thisProduct.description}</p>
						<h3>Chọn size sản phẩm: </h3>
						<div className="sizepicker">
							<div className="size-item actived" onClick={() => this.sizePicker(1)}>XXL</div>
							<div className="size-item" onClick={() => this.sizePicker(2)}>XL</div>
							<div className="size-item" onClick={() => this.sizePicker(3)}>L</div>
						</div>
						<h4>Hàng còn: {thisProduct.amount}</h4>
						<div className="amountpicker">
							<h4>Số lượng: </h4>
							<div className="amountButton">
								<button className="amount-b" onClick={() => this.decrease()}><b>-</b></button>
								<input id="count" style={{width: '50px', textAlign: 'center', border:'solid white'}} type="text" value="1" onChange={this.changeHandler}/>
								<button className="amount-b" onClick={() => this.increase()}><b>+</b></button>
							</div>
						</div>
						<div>
							<button className="buy-button" onClick={this.buyHandler}><b>THÊM VÀO GIỎ</b></button>
						</div>
						<h4 id="pop-up" >Thêm sản phẩm vào giỏ thành công!</h4>
					</div>

				</div>
	
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
		productsActions: bindActionCreators(productsActions, dispatch),
		cartsActions: bindActionCreators(cartsActions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ShirtPage);