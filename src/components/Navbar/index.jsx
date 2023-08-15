import React, { useContext, useState } from 'react';

import reactLogo from '../../assets/react.svg';

import { BiSearch, BiUser } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { Context } from '../../utils/context.js';

const Navbar = () => {
	const [, setSearch] = useContext(Context);
	const [inputText, setInputText] = useState('');
	const history = useHistory();

	const handleChange = (event) => {
		setInputText(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		history.push('/');
		setSearch(inputText);
	};

	return (
		<div className="w-full px-14 py-3 flex justify-between items-center bg-[#323438]">
			<Link to="/">
				<img src={reactLogo} alt="logo" className="w-9" />
			</Link>
			<div className="flex items-center rounded-lg bg-[#242527] px-5 py-2">
				<BiSearch className="h-5 w-5" />
				<form onSubmit={handleSubmit}>
					<input
						className="w-96 pl-3 bg-[#242527] text-sm focus:outline-none "
						placeholder="Search"
						type="search"
						value={inputText}
						onChange={handleChange}
					></input>
				</form>
			</div>
			<div className="flex items-center rounded-lg bg-[#242527] px-4 py-1.5">
				<BiUser className="h-5 w-5" />
				<h6 className="ml-2">Guest</h6>
			</div>
		</div>
	);
};

export default Navbar;
