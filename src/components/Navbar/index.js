import React, {Component} from 'react';
import './style.css'
import Reorder from '@material-ui/icons/Reorder';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Search from '@material-ui/icons/Search';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import App from './../App/index';
import NotFound from './../NotFound/index';
// import routes from './../../routes';
import ProductList from './../ProductsList/index';
import Contact from './../Contact/index';
const menu = [
	{
		label: "Trang chủ",
		to: "/",
		exact: true,
	},
	{
		label: 'Sản phẩm',
		to: '/ProductsList',
		exact: true,
	},
	{
		label:'Liên hệ',
		to:'/Contact',
		exact: false
	},
	
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            return(
            	<div style={{marginRight: '20px'}}>
                	<NavLink exact to={to} style={{textDecoration:'none', color:'white'}}>{label} </NavLink>
                </div>
            )
        }}/>
    )
}

class Navbar extends Component{
	constructor(props){
		super(props)
		this.state = {
			navres: 'none',
		}
	}
	
	d_res_menu = () => {
		if(this.state.navres === 'none') {
			// console.log(this.state.navres);
			this.setState({
				navres: 'flex'
			})
		} else{
			// console.log(this.state.navres);
			this.setState({
				navres: 'none'
			})
		}
	}
	changeDisplay(navres){
		
		return{
			display: navres,
			flexDirection: 'column',
		};
	}
	render(){

		var {navres} = this.state;
		return(
			<div className="tongthe-res">
				<div className="Navbar">
					<Link to="/" className="Navbar-logo" style={{textDecoration:'none'}}>
						<h1 className="T">T</h1>
						<h6 className="des">shirt pant shoe bag</h6>
					</Link>
					<div className="Navbar-list" >
						{this.showNavbar(menu)}
						<NavLink to="/Payment"  style={{textDecoration:'none', color: 'white'}}>
							<div>

								<AddShoppingCart className="shopping-cart"/>
							</div>
						</NavLink>
			        </div>
				</div>
				<div className="toggle" onClick={this.d_res_menu}>
					<Reorder/>
				</div>
				<div className="Navbar-list-responsive" style={this.changeDisplay(navres)}>
					{this.showNavbar(menu)}
				</div>
				<div className="search-and-shop">
					<div style={{display: 'flex', flexDirection: 'row'}}>
						<input className="search-box" placeholder="Search..."/>
						<Search className="search-but"/>
					</div>
				</div>
			</div>
		);
	}
	showNavbar = (menu) => {
		var result = null;
    	if(menu.length > 0){
    		result = menu.map((item, index) => {
    			return <MenuLink key={index} label={item.label} to={item.to} activeOnlyWhenExact={item.exact}/>
    		})
    	}
    	return result;
	}
}

export default Navbar;