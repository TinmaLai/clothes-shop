import React,{Component} from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import ShirtPage from './../../ProductPage/ShirtPage';

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            return(
            	<div style={{marginRight: '20px'}}>
                	<NavLink exact to={to}>{label}</NavLink>
                </div>
            )
        }}/>
    )
}

class ShirtItem extends Component{
	numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	render(){
		var {product} = this.props;
		return(
				<div>
					<Link to={`shirt/${product.id}`} className="item">
						<img className="product-img" src={product.img}/>
						<div style={{alignSelf: 'center'}}>
							<h2>{product.name}</h2>
							<h4>{this.numberWithCommas(product.price)}₫</h4>
						</div>
					</Link>
				</div>
		);
	}
}

export default ShirtItem;
