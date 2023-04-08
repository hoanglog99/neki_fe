/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import Home from 'src/client/Pages/Home'
import ListProduct from 'src/client/Pages/Products/ListProduct'
import './Header.css'

const Header = () => {
  return (
    <div>
    <header className="header">
		<div className="header_inner d-flex flex-row align-items-center justify-content-start">
			<div className="logo pl-4"><img src='https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png' width={120}/></div>
			<nav className="main_nav">
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link  to='/products'>Products</Link></li>
					<li><Link to='./contact'/>Contact</li>
					{/* <li><Link />Products</li> */}
					<li><a href="categories.html">accessories</a></li>
					<li><a href="categories.html">lingerie</a></li>
					{/* <li><a href="contact.html">contact</a></li> */}
				</ul>
			</nav>
			<div className="header_content ml-auto">
				<div className="search header_search">
					<form action="#">
						<input type="search" className="search_input" required="required" />
						<button type="submit" id="search_button" className="search_button"><img src="images/magnifying-glass.svg" alt="" /></button>
					</form>
				</div>
				<div className="shopping">
			
					<Link to='./cart'>
						<div className="cart">
							<img src="images/shopping-bag.svg" alt="" />
							<div className="cart_num_container">
								<div className="cart_num_inner">
									<div className="cart_num">1</div>
								</div>
							</div>
						</div>
					</Link>
		
					<a href="#">
						<div className="star">
							<img src="images/star.svg" alt="" />
							<div className="star_num_container">
								<div className="star_num_inner">
									<div className="star_num">0</div>
								</div>
							</div>
						</div>
					</a>
					<a href="#">
						<div className="avatar">
							<img src="images/avatar.svg" alt="" />
						</div>
					</a>
				</div>
			</div>

			<div className="burger_container d-flex flex-column align-items-center justify-content-around menu_mm"><div></div><div></div><div></div></div>
		</div>
	</header>
	<div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
		<div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
		<div className="logo menu_mm"><a href="#">Wish</a></div>
		<div className="search">
			<form action="#">
				<input type="search" className="search_input menu_mm" required="required"/>
				<button type="submit" id="search_button_menu" className="search_button menu_mm"><img className="menu_mm" src="images/magnifying-glass.svg" alt=""/></button>
			</form>
		</div>
		<nav className="menu_nav">
			<ul className="menu_mm">
				<li className="menu_mm"><a href="#">home</a></li>
				<li className="menu_mm"><a href="#">clothes</a></li>
				<li className="menu_mm"><a href="#">accessories</a></li>
				<li className="menu_mm"><a href="#">lingerie</a></li>
				<li className="menu_mm"><a href="#">contact</a></li>
			</ul>
		</nav>
	</div>
    </div>
  )
}

export default Header
