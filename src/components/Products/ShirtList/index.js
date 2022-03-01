import React,{Component} from 'react';
import './style.css';
import ShirtItem from './../../Items/ShirtItem/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import ShirtPage from './../../ProductPage/ShirtPage';
import {bindActionCreators} from 'redux';
import * as productsActions from './../../../actions/products';
import {connect} from 'react-redux';
import StarBorder from '@material-ui/icons/StarBorder';

class Shirt extends Component {
	componentWillMount(){
		const {productsActions} = this.props;
		var {getListTask} = productsActions;
		getListTask();
		
	}
	numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	
	render(){
		var {shirts} = this.props;
		var {match} = this.props;
    	// console.log(match);
    	var url = match.url;
    	var {location} = this.props;
        // console.log(location);
		var listShirts = shirts.map((product,index) => {
			if(index <= 3){
				//src={`imgs/ao${product.id}.jpg`}
				let stars = [];
				for(let i = 0; i < product.rating; i++){
					stars.push(<span key={i} className="fa fa-star rating star"></span>);
				}
				for(let index = stars.length; index < 5; index++){
					stars.push(<span key={index} className="fa fa-star rating"></span>);
				}
				return <Link key={index} to={`${url}shirt/${product.id}`} className="item">
							<img className="product-img" src={product.img}/>
							<div style={{alignSelf: 'center'}}>
								<h2>{product.name}</h2>
								<div className="starBlock">
									{stars}
								</div> 
								<h3>{this.numberWithCommas(product.price)}₫</h3>
							</div>
						</Link>
			}
		})
		return(
			<div>
				<div className="shirts-lists">
					<h1 style={{alignSelf: 'center', fontFamily:'Reem Kufi'}}>Áo phông</h1>
					<div className="item-lists">
						{listShirts}
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
		productsActions: bindActionCreators(productsActions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Shirt);