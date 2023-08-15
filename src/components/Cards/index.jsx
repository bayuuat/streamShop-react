import React, { useState } from 'react';
import { BiSolidHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cards = ({ title, img, to }) => {
	return (
		<Link to={to}>
			<div className="item-card cursor-pointer rounded-2xl transition-all duration-300 p-4 bg-[#323438] hover:drop-shadow-[0_8px_8px_rgba(200,200,200,0.15)]">
				<div className="relative ">
					<img className="w-full h-full object-cover rounded-2xl" src={img} alt="" />
				</div>
				<h5 className="text-base line-clamp-1 text-ellipsis overflow-hidden font-medium mt-5 mb-1">{title}</h5>
				<span className="text-sm line-clamp-1 text-ellipsis overflow-hidden text-gray-500"></span>
			</div>
		</Link>
	);
};

export default Cards;
