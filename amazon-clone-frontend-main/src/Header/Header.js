import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import { auth } from '../firebase';

function Header() {
	const [{basket, user},dispatch] = useStateValue();
	const handleAuth = () => {
		if(user){
			auth.signOut();
		}
	}
	return (
		<div className="nav-belt">
			<Link to="/">
				<img 
					className="amazon_logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>	

			<div className="header-search">
				<input
					className="header-searchInput"
					type="text"
				/>
				<SearchIcon className="header-searchIcon"/>
			</div>

			<div  className="header-right">
				<Link  style={{ textDecoration:"none"}} to={!user && "/login"}>
					<div onClick={handleAuth} className="right-option">
						<span className="right-optionLine1">Hello,{!user?'Guest' : user.email}</span>
						<span className="right-optionLine2">{user?'sign out':'sign in'}</span>
					</div>
				</Link>	
				<Link  style={{ textDecoration:"none"}} to={"/order"}>
					<div className="right-option">
						<span className="right-optionLine1">Returns</span>
						<span className="right-optionLine2">& Orders</span>
					</div>
				</Link>	

				<div className="right-option">
					<span className="right-optionLine1">Your</span>
					<span className="right-optionLine2">Prime</span>
				</div>

				<Link
					style={{ textDecoration:"none"}}
					to='/checkout'>
					<div className="header-rightBasket">
						<ShoppingBasketIcon/>
						<span className="right-optionLine2 header-basketCount">{basket?.length}</span>
					</div>
				</Link>	
					
			</div>
		</div>
	)
}

export default Header