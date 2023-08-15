import React, { useState } from 'react';

import io from 'socket.io-client';

import { BiSend } from 'react-icons/bi';

import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { apiUrl } from '../../utils/api';

const InputComment = () => {
	const { id } = useParams();
	const guestName = localStorage.getItem('guest_username');
	const [messageInput, setMessageInput] = useState('');
	const socket = io(`${apiUrl}`);

	const handleNewComment = () => {
		const data = { body: { video: id, username: guestName, comment: messageInput } };
		if (id && messageInput.trim() !== '') {
			socket.emit('newComment', data);
			setMessageInput('');
		}
	};

	return (
		<div className="flex w-full rounded-b-xl bg-[#323438] box-border border-t-[1px] border-gray-600 px-5 py-4">
			<img src={`https://api.dicebear.com/6.x/micah/svg?seed=${guestName}&backgroundColor=42495B,D1463C,C7BF96`} alt="" className="w-9 h-9 rounded-md object-cover" />
			<div className="w-full flex flex-col ml-3">
				<span className="text-xs text-gray-500">{guestName}</span>
				<form
					className="flex w-full"
					onSubmit={(e) => {
						e.preventDefault();
						handleNewComment();
					}}
				>
					<input
						type="text"
						placeholder="Comment"
						className="w-full py-1 border-b border-[#242527] bg-transparent text-sm focus:outline-none"
						onChange={(e) => setMessageInput(e.target.value)}
						value={messageInput}
					/>
					<button type="submit" className="ml-3 bg-yellow-300 p-2 flex justify-center items-center rounded-md">
						<BiSend className="text-gray-700" />
					</button>
				</form>
			</div>
		</div>
	);
};

export default InputComment;
