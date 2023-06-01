import React from 'react';
import HomeButton from '../../components/Button/HomeButton';
import CartSection from '../../components/Cart/CartSection';
import RecommendationSection from '../../components/RecommendationSection';

function Cart() {
	return (
		<div className='bg-background flex flex-col items-center min-h-screen'>
			<CartSection />
			<RecommendationSection />
			<HomeButton />
		</div>
	);
}

export default Cart;
