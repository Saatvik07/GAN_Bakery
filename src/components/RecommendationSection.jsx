import React, { useMemo } from 'react';
import { DividerTypes } from '../types/componetPropTypes/divider';
import { useSelector } from 'react-redux';
import { getRecommendations } from '../utils/recommendationUtils';
import Divider from './Divider';
import ProductList from './Products/ProductList';

function RecommendationSection() {
	const cart = useSelector((state) => state.cart);
	const recommendations = useMemo(() => {
		return getRecommendations(cart);
	}, [cart]);

	return (
		<div className='mt-16 flex flex-col items-center relative w-full md:w-11/12 xl:w-4/5'>
			<h2 className='text-textColor font-heading font-semibold text-3xl'>
				RECOMMENDED PRODUCTS
			</h2>
			<Divider type={DividerTypes.RECOMMENDATION} />
			<ProductList products={recommendations} />
		</div>
	);
}

export default RecommendationSection;
