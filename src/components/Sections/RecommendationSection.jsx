import React, { useMemo } from 'react';
import { DividerTypes } from '../../types/componetPropTypes/divider';
import { useSelector } from 'react-redux';
import { getRecommendations } from '../../utils/recommendationUtils';
import Divider from '../UI/Divider';
import ProductList from '../Products/ProductList';

function RecommendationSection() {
	const cart = useSelector((state) => state.cart);
	const recommendations = useMemo(() => {
		return getRecommendations(cart);
	}, [cart]);

	return (
		<div className='mt-16 flex flex-col items-center relative w-full md:w-11/12'>
			<h2 className='text-textColor font-heading font-semibold text-2xl lg:text-3xl xl:text-4xl'>
				RECOMMENDED PRODUCTS
			</h2>
			<Divider type={DividerTypes.RECOMMENDATION} />
			<ProductList products={recommendations} />
		</div>
	);
}

export default RecommendationSection;
