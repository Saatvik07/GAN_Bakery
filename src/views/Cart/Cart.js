import React from 'react';
import HomeButton from '../../components/Button/HomeButton';
import CartSection from '../../components/Sections/CartSection';
import RecommendationSection from '../../components/Sections/RecommendationSection';

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
