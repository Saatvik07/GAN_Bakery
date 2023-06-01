import React from 'react';
import TopBanner from '../../components/TopBanner/TopBanner';
import CartButton from '../../components/Button/CartButton';
import ProductSection from '../../components/Products/ProductSection';

function Homepage() {
	return (
		<div className='bg-background relative'>
			<div className='h-[200px] bg-background-dark'></div>
			<TopBanner />
			<ProductSection />
			<CartButton />
		</div>
	);
}

export default Homepage;
