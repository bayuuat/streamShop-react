import React from 'react';

const Video = ({videoLink}) => {
	return (
		<div className="relative">
			<iframe
				className="h-[546px] 2xl:h-[720px] w-full rounded-xl"
				src={`https://www.youtube.com/embed/${videoLink}`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default Video;
