import React from 'react';
import { products } from '../../utils/data';
import { DividerTypes } from '../../types/componetPropTypes/divider';
import Divider from '../Divider';
import ProductList from './ProductList';

function ProductSection() {
	return (
		<div className='mt-96 lg:mt-80 xl:mt-44 flex flex-col items-center relative'>
			<h2 className='text-textColor font-heading font-semibold text-3xl'>NEW PRODUCTS</h2>
			<Divider type={DividerTypes.HOMEPAGE} />
			<ProductList products={products} />
		</div>
	);
}

export default ProductSection;
