import React from 'react';

import { BiBadgeCheck } from 'react-icons/bi';

const CommentList = ({ username, chat, verif }) => {
	const verified = verif ? 'text-blue-600' : 'text-gray-500';

	return (
		<div className="flex mb-3">
			<img
				src={`https://api.dicebear.com/6.x/micah/svg?seed=${username}&backgroundColor=42495B,D1463C,C7BF96`}
				alt="avatar"
				className="w-9 h-9 mt-0.5 rounded-md object-cover"
			/>
			<div className="flex flex-col ml-3">
				<span className={`flex items-center text-xs ${verified}`}>
					{username}
					{verif && <BiBadgeCheck className="ml-1" />}
				</span>
				<span className="text-sm leading-4 mt-0.5 text-gray-50">{chat}</span>
			</div>
		</div>
	);
};

export default CommentList;
