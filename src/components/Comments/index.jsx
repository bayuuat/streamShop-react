import React, { useEffect, useRef, useState } from 'react';

import { io } from 'socket.io-client';

import CommentList from './CommentList';
import InputComment from './InputComment';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { apiUrl } from '../../utils/api';

const Comments = () => {
	const { id } = useParams();
	const [comments, setComments] = useState([]);
	const [loadingVideos, setLoadingVideos] = useState(false);
	const messageEl = useRef(null);
	const socket = io(`${apiUrl}`);

	const handleJoinRoom = async () => {
		setLoadingVideos(true);
		let args = new URLSearchParams({
			videoId: id,
		});

		try {
			const response = await fetch(`${apiUrl}/api/comments?${args}`);

			const data = await response.json();
			setComments(data.data);
		} catch (error) {
			console.error('Error:', error.message);
		} finally {
			setLoadingVideos(false);
		}
	};

	const handleChatMessage = (comment) => {
		setComments((prevComments) => [...prevComments, comment]);
	};

	useEffect(() => {
		handleJoinRoom().then(socket.emit('loadComment', id), socket.on('newComment', handleChatMessage));

		const observer = new MutationObserver(() => {
			if (messageEl.current) {
				messageEl.current.scrollTo({ top: messageEl.current.scrollHeight, behavior: 'smooth' });
			}
		});

		observer.observe(messageEl.current, { childList: true });

		return () => {
			observer.disconnect();
			socket.off('newComment');
		};
	}, []);

	return (
		<div className="h-[580px] min-[1537px]:h-[720px] box-border border-[1px] border-gray-600 rounded-xl flex flex-col">
			<div className="grow-0 box-border border-b-[1px] border-gray-600 w-full rounded-t-xl bg-[#323438] px-5 py-2">
				<h4 className="text-lg">Live Chat</h4>
			</div>
			<div className="grow w-full bg-[#323438] px-5 pt-2 overflow-y-auto" ref={messageEl}>
				{comments.map((item, index) => {
					return <CommentList key={index} username={item.username} chat={item.comment} />;
				})}
			</div>
			<div className="grow-0">
				<InputComment />
			</div>
		</div>
	);
};

export default Comments;
