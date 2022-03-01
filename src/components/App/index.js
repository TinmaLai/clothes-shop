import React,{Component} from 'react';
import {Provider} from 'react-redux';
import './style.css';
import {withStyles} from '@material-ui/core';
import configStore from './../../redux/configStore';
import Navbar from './../Navbar/index';
import ProductsList from './../ProductsList/index';
import routes from './../../routes';
import Footer from './../Footer/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShirtPage from './../ProductPage/ShirtPage';

const store = configStore();

class App extends Component{
	render(){
		return(
			<Provider store={store}>
				<div className="main-all">
					<Router>
						<Navbar/>
						<Switch>
							{this.showContentMenu(routes)}
						</Switch>
						<Footer/>
					</Router>
				</div>
			</Provider>
		);
	}
	showContentMenu = (routes) =>{
		var result = null;
        if(routes.length > 0) {
            result = routes.map((route,index) => {
                return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
            })
        }
        return result;
	}
}

export default App;