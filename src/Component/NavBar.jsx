import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const NavBar = () => {
	const [nav, setNav] = useState(false);
	const handelNav = () => {
		setNav(!nav);
	};

	return (
		<div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
			<h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
			<ul className=" hidden md:flex">
				<li className="p-4">Home</li>
				<li className="p-4">Company</li>
				<li className="p-4">Resources</li>
				<li className="p-4">About</li>
				<li className="p-4">Contact</li>
			</ul>
			<div className="block md:hidden" onClick={handelNav}>
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					nav
						? 'fixed  left-0 top-0 w-[60%] md:hidden h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'fixed left-[-100%] ease-out duration-500'
				}>
				<h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
				<ul className="pt-24 uppercase p-4">
					<li className="p-4 border-b border-gray-600">Home</li>
					<li className="p-4 border-b border-gray-600">Company</li>
					<li className="p-4 border-b border-gray-600">Resources</li>
					<li className="p-4 border-b border-gray-600">About</li>
					<li className="p-4">Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
