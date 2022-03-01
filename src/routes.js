
import App from './components/App/index';
import NotFound from './components/NotFound/index';
import Contact from './components/Contact/index';
import ProductsList from './components/ProductsList/index';
import Home from './components/Home/index';
import AllProducts from './components/AllProducts/index';
import Payment from './components/Payment/index';
import ShirtList from './components/Products/ShirtList/index';
import ShirtPage from './components/ProductPage/ShirtPage';
import InforShipping from './components/InforShipping/index';
import ProductPagination from './components/AllProducts/ProductPagination/index';
const routes = [
	{
		path: '/',
		exact: true,
		main: ({match,location}) => <ProductsList match={match} location={location}/>
	},
	{
		path: '/Contact',
		exact: false,
		main: () => <Contact/>
	},
	{
		path: '/ProductsList',
		exact: true,
		main: ({match,location}) => <ProductPagination match={match} location={location}/>
	},
	{
		path: '/Payment',
		exact: false,
		main: () => <Payment/>
	},
	{
		path: '/shirt/:id',
		exact: false,
		main: ({match,location}) => <ShirtPage match={match}/>
	},
	{
		path: '/InforShipping',
		exact: false,
		main: () => <InforShipping/>
	},
	{
		path: '/ProductsList/:numPage',
		exact: false,
		main: ({match}) => <ProductPagination match={match}/>
	},
	{
		path: '',
		exact: false,
		main: () => <NotFound/>
	},


];

export default routes;