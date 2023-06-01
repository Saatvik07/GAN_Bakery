import React from 'react';
import ProductDescription from './ProductDescription';

function ProductCard({ image, title, description, price }) {
	return (
		<div className='flex flex-col justify-center basis-3/5 sm:basis-1/3 lg:basis-1/5 mx-2 sm:mx-3 my-10 relative hover:shadow-2xl transition-all !duration-200'>
			<img className='w-full h-56 md:h-60 lg:h-64' src={image} alt={title} />
			<div className='pt-2 md:pt-3 xl:pt-4 px-2 md:px-3 xl:px-4 pb-6 xl:pb-8 flex flex-col items-center justify-center border-black border border-opacity-50'>
				<h1 className='text-base md:text-lg font-bold text-textColor font-banner-heading mb-2'>
					{title}
				</h1>
				<ProductDescription value={description} />
				<p className='text-textColor text-base md:text-lg font-body'>$ {price}</p>
			</div>
			<button className='w-4/5 bg-accent-100 text-textColor font-body font-bold p-2 rounded-md absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 border-textColor border hover:bg-textColor hover:text-accent-100 transition-colors !duration-500'>
				Add to Cart
			</button>
		</div>
	);
}

export default ProductCard;
