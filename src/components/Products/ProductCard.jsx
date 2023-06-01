import React from 'react';
import ProductDescription from './ProductDescription';

function ProductCard({ image, title, description, price }) {
	return (
		<div className='flex flex-col justify-center basis-1/5 mx-3 my-10  relative hover:shadow-2xl transition-all !duration-200'>
			<img className='w-60 h-56' src={image} alt={title} />
			<div className='pt-4 px-4 pb-8 flex flex-col items-center justify-center w-full  border-black border border-opacity-50'>
				<h1 className='text-lg font-bold text-textColor font-banner-heading mb-2'>
					{title}
				</h1>
				<ProductDescription value={description} />
				<p className='text-textColor text-lg font-body'>$ {price}</p>
			</div>
			<button className='w-4/5 bg-accent-100 text-textColor font-body font-bold p-2 rounded-md absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 border-textColor border hover:bg-textColor hover:text-accent-100 transition-colors !duration-500'>
				Add to Cart
			</button>
		</div>
	);
}

export default ProductCard;
