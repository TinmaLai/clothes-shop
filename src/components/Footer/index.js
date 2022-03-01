import React,{Component} from 'react';
import './footerStyle.css';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route
  } from "react-router-dom";
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
                	<NavLink exact to={to} style={{textDecoration:'none', color:'black'}}>{label} </NavLink>
                </div>
            )
        }}/>
    )
}

class Footer extends Component{
    
    render(){
        return(
            <div class="footer">
                <div class="footer-item">
                    <h2 class="footer-item-header">Danh mục</h2>
                    <hr/>
                    <div class="footer-item-content">
                        {this.showNavbar(menu)}
                    </div>
                </div>
                <div class="footer-item">
                    <h2 class="footer-item-header">Đăng ký nhận tin</h2>
                    <hr/>
                    <div class="footer-item-content">
                        <p>Đăng ký để nhận thông tin khuyến mãi từ shop nhé!</p>
                        <div className="subcribe">
                            <input type="email" placeholder="Nhập email của bạn"/>
                            <button className="subcribe-btn">ĐĂNG KÍ</button>
                        </div>
                    </div>
                </div>
                <div class="footer-item">
                    <h2 class="footer-item-header">Thông tin</h2>
                    <hr/>
                    <div class="footer-item-content">
                        <p>Địa chỉ chúng tôi</p>
                        <strong>Trần phú, Hà Đông, Hà Nội</strong>
                        <p>Email chúng tôi</p>
                        <strong>nguyentin08072000@gmail.com</strong>
                        <p>Điện thoại: 0836067908</p>
                    </div>
                </div>
            </div>

        );
    }
    showNavbar = (menu) => {
		var result = null;
    	if(menu.length > 0){
    		result = menu.map((item, index) => {
    			return <MenuLink style={{marginTop: ''}}key={index} label={item.label} to={item.to} activeOnlyWhenExact={item.exact}/>
    		})
    	}
    	return result;
	}
}

export default Footer;