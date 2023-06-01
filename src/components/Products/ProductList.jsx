import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../../utils/data';

function ProductList() {
	return (
		<div className='w-full md:w-11/12 xl:w-4/5 mb-24 flex flex-wrap flex-none grow-0 items-start justify-evenly p-5'>
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
