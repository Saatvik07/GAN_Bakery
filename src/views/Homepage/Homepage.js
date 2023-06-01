import React from 'react';
import TopBanner from '../../components/TopBanner/TopBanner';
import Divider from '../../components/Divider';
import ProductList from '../../components/Products/ProductList';
import CartButton from '../../components/CartButton';

function Homepage() {
	return (
		<div className='bg-background relative'>
			<div className='h-[200px] bg-background-dark'></div>
			<TopBanner />
			<div className='mt-96 lg:mt-80 xl:mt-44 flex flex-col items-center relative'>
				<h2 className='text-textColor font-heading font-semibold text-3xl'>NEW PRODUCTS</h2>
				<Divider />
				<ProductList />
				<CartButton />
			</div>
		</div>
	);
}

export default Homepage;
