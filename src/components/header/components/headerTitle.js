import React from 'react'
import { Link } from 'react-scroll';
import n from '../../../assets/portafolio/logoC.png'


const HeaderTitle = () => {
	return (
		<>
			<div className="header-logo">
				<Link key="Cielo" to="home" smooth={true} duration={3000} spy={true}>
					<img clasName="logoN" src={n} alt="C"/> <span>ielo</span>
				</Link>
			</div>
		</>
	)
}

export default HeaderTitle
