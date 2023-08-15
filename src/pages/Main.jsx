import React, { useEffect, useState, useContext } from 'react';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import { Skeleton } from '@chakra-ui/react';

import { Context } from '../utils/context.js';
import { apiUrl } from '../utils/api';

const Main = () => {
	const [videos, setVideos] = useState([]);
	const [loadingVideos, setLoadingVideos] = useState(false);
	const [search] = useContext(Context);

	const getFeatPlaylists = async () => {
		setLoadingVideos(true);

		let args = new URLSearchParams({
			name: search
		});

		try {
			const response = await fetch(`${apiUrl}/api/videos?${args}`);
			const data = await response.json();
			setVideos(data.data);
		} catch (error) {
			console.error('Error:', error.message);
		} finally {
			setLoadingVideos(false);
		}
	};

	const loadingSkel = [...Array(6)].map((e, i) => <Skeleton rounded={'14px'} key={i} height="250px" />);

	useEffect(() => {
		getFeatPlaylists();
	}, [search]);

	return (
		<>
			<Navbar />
			<div className="grid grid-cols-4 2xl:grid-cols-5 gap-6 justify-center py-8 px-10">
				{!loadingVideos
					? !!videos &&
					  videos.map((video) => {
							return <Cards key={video._id} img={video.imageThumbnail} title={video.name} to={`/video/${video._id}`} />;
					  })
					: loadingSkel}
			</div>
		</>
	);
};

export default Main;
