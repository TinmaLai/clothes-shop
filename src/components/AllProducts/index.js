
import React, {Component} from 'react';
import './allProductStyle.css';
import {bindActionCreators} from 'redux';
import * as productsActions from './../../actions/products.js';
import {connect} from 'react-redux';
import{
	BrowserRouter as Router,
  	Switch,
  	Route,
  	Link
} from 'react-router-dom';
import ProductPagination from './ProductPagination/index.js';
import ShirtPage from './../ProductPage/ShirtPage.js';
import Payment from './../../components/Payment/index.js';

class AllProducts extends Component{
	componentWillMount(){
		const {productsActions} = this.props;
		var {getListTask} = productsActions;
		getListTask();
		
	}
	numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	showProductPagination = () => {

	}
	render(){
		var {shirts} = this.props;
		var {match} = this.props;
		var url = match.url;
		console.log("render again allproduct");
		var paginationBlock = [];
		// for(let i = 0; i < shirts.length/6; i++){
		// 	paginationBlock.push(<div key={i} className="pagination"><Link className="paginationA" style={{textDecoration: 'none', textAlign:'center'}} key={i} to={`${url}/${i}`} >
		// 		{i+1}
		// 	</Link></div>);
		// }
		var startHolder = null;
		if(match.params.length == undefined){
			console.log(match);
			startHolder = <div className="block"><ProductPagination list={shirts}/></div>
			// document.getElementsByClassName("block").classList.remove("none");
		}
		// console.log(match);
		// console.log(startHolder);
		return(
			<Router>
				<div>
					<h2>Tất cả sản phẩm</h2>
					
					<div className="content">
						{/*<Switch>
							{/*<Route path="/ProductsList" exact component={(match) => <ProductPagination list={shirts} match={match}/>}/>*/}
							{/*<Route path="/ProductsList/:numPage" exact component={(match) => <ProductPagination list={shirts} match={match}/>}/>*/}
							{/*<Route path="/shirt/:id" component={({match,location}) => <ShirtPage match={match}/>}/>*/}
							
						{/*</Switch>*/}*/}
						{/*{startHolder}*/}
						{/*<div className="paginationBlock">
							{paginationBlock}
							<Link to="" className="nextButton">
								--->
							</Link>
						</div>*/}
					</div>
				</div>
			</Router>
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

export default connect(mapStateToProps,mapDispatchToProps)(AllProducts);