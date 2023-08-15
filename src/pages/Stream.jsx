import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { Link, Skeleton } from '@chakra-ui/react';

import Comments from '../components/Comments';
import Video from '../components/Video';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { apiUrl } from '../utils/api';

const Stream = () => {
	const { id } = useParams();
	const [video, setVideo] = useState([]);
	const [product, setProduct] = useState([]);
	const [loadingVideos, setLoadingVideos] = useState(false);
	const [loadingProducts, setLoadingProducts] = useState(false);
	const guestName = localStorage.getItem('guest_username');

	const checkGuest = () => {
		if (!guestName) {
			const characters = '1234567890';
			let newPassword = '';
			const charactersLength = characters.length;

			for (let i = 0; i < 8; i++) {
				const randomIndex = Math.floor(Math.random() * charactersLength);
				newPassword += characters.charAt(randomIndex);
			}
			localStorage.setItem('guest_username', `guest${newPassword}`);
		}
	};

	const getVideoDetail = async () => {
		setLoadingVideos(true);

		try {
			const response = await fetch(`${apiUrl}/api/videos/${id}`);

			const data = await response.json();
			setVideo(data.data);
		} catch (error) {
			console.error('Error:', error.message);
		} finally {
			setLoadingVideos(false);
		}
	};

	const getProducts = async () => {
		setLoadingVideos(true);
		let args = new URLSearchParams({
			videoId: id,
		});

		try {
			const response = await fetch(`${apiUrl}/api/products?${args}`);

			const data = await response.json();
			console.log(data);
			setProduct(data.data);
		} catch (error) {
			console.error('Error:', error.message);
		} finally {
			setLoadingProducts(false);
		}
	};

	const loadingSkel = [...Array(6)].map((e, i) => <Skeleton rounded={'14px'} key={i} height="250px" />);

	useEffect(() => {
		checkGuest();
		getVideoDetail();
		getProducts();
	}, []);

	return (
		<>
			<Navbar />
			<div className="flex gap-6 py-6 px-10">
				{!!video && (
					<>
						<div className="w-2/3 2xl:w-3/4">
							<Video videoLink={video.videoLink} />
							<div className="grid grid-cols-4 2xl:grid-cols-5 gap-4 mt-8">
								{product.map((item) => {
									return <ProductCard key={item._id} title={item.title} price={item.price} img={item.img} link={item.link} />;
								})}
							</div>
						</div>
						<div className="flex-1">
							<Comments />
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Stream;
