import React from 'react';
import { products } from '../../utils/data';
import { DividerTypes } from '../../types/componetPropTypes/divider';
import Divider from '../UI/Divider';
import ProductList from '../Products/ProductList';

function ProductSection() {
	return (
		<div className='mt-64 xl:mt-32 flex flex-col items-center relative'>
			<h2 className='text-textColor font-heading font-semibold text-2xl lg:text-3xl xl:text-4xl'>
				NEW PRODUCTS
			</h2>
			<Divider type={DividerTypes.HOMEPAGE} />
			<ProductList products={products} />
		</div>
	);
}

export default ProductSection;
