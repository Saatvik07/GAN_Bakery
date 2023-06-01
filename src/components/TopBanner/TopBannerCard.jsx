import React from 'react';

function TopBannerCard({ image, title, description }) {
	return (
		<div className='mx-2 p-4 flex  items-center justify-center'>
			<img className='w-20 h-20 mr-2' src={image} alt={title} />
			<div className='p-4 flex justify-center flex-col'>
				<h1 className='mb-2 text-2xl font-bold text-textColor font-banner-heading'>
					{title}
				</h1>
				<p className='text-textColor text-sm font-body'>{description}</p>
			</div>
		</div>
	);
}

export default TopBannerCard;
