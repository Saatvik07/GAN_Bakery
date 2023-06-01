import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
	return (
		<div className='w-full xl:w-4/5 mb-24 flex flex-wrap items-start justify-evenly p-5'>
			{products.map((product, index) => {
				return (
					<ProductCard
						id={product.id}
						key={index}
						title={product.title}
						image={product.image}
						description={product.description}
						price={product.price}
					/>
				);
			})}
		</div>
	);
}

export default ProductList;
