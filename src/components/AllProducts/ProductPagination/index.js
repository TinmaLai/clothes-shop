import React, {Component} from 'react';
import './ProductPaginationStyle.css'
import {bindActionCreators} from 'redux';
import * as productsActions from './../../../actions/products.js';
import {connect} from 'react-redux';
import{
	BrowserRouter as Router,
  	Switch,
  	Route,
  	Link
} from 'react-router-dom';

class ProductPagination extends Component{
	componentWillMount(){
		const {productsActions} = this.props;
		var {getListTask} = productsActions;
		getListTask();
		
	}
	numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	render(){
		var {match} = this.props;
		var {shirts} = this.props;
		var url = "/ProductsList";
		var numPage = 0;
		// if(match != undefined){
		// 	if(match.match.url.localeCompare("/ProductsList") != 0) 

		//  	document.getElementsByClassName("block")[0].classList.add("d-none");
		// }
		if(match.params.numPage != undefined)
			numPage = match.params.numPage;
		var paginationBlock = [];
		for(let i = 0; i < shirts.length/6; i++){

			paginationBlock.push(<div key={i} className="pagination"><Link className="paginationA" style={{textDecoration: 'none', textAlign:'center'}} key={i} to={`${url}/${i}`} >
				{i+1}
			</Link></div>);
		}
		var listShirts = shirts.map((product,index) => {
			// 0 = 0 1 2 3 4 5 , 1 = 6 7 8 9 10 11
			let stars = [];
			for(let i = 0; i < product.rating; i++){
				stars.push(<span key={i} className="fa fa-star rating star"></span>);
			}
			for(let index = stars.length; index < 5; index++){
				stars.push(<span key={index} className="fa fa-star rating"></span>);
			}
			if(index >= 6*numPage && index < 6*(parseInt(numPage)+1)){
				return <Link key={index} to={`/shirt/${product.id}`} className="item">
							<img className="product-img" src={`./../../../${product.img}`}/>
							<div style={{alignSelf: 'center'}}>
								<h2>{product.name}</h2>
								<div className="starBlockAllProduct">
									{stars}
								</div>
								<h3>{this.numberWithCommas(product.price)}₫</h3>
							</div>
						</Link>
			}
		})
		return(
			<div>
				<h2>Tất cả sản phẩm</h2>
				<div className="itemBlock">
					{listShirts}
				</div>
				<div className="paginationBlock">
					{paginationBlock}
					<Link to="" className="nextButton">
						--->
					</Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductPagination);