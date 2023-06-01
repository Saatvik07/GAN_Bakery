import React from 'react';

function TopBannerCard({ image, title, description }) {
	return (
		<div className='px-3 flex xl:basis-1/4  items-center justify-center'>
			<img
				className='w-12 h-12 md:w-14 md:h-14 xl:w-20 xl:h-20 mr-2'
				src={image}
				alt={title}
			/>
			<div className='p-4 flex justify-center flex-col'>
				<h1 className='mb-2 text-base md:text-lg  lg:text-xl xl:text-2xl font-bold text-textColor font-banner-heading'>
					{title}
				</h1>
				<p className='text-textColor text-xs md:text-sm font-body'>{description}</p>
			</div>
		</div>
	);
}

export default TopBannerCard;
