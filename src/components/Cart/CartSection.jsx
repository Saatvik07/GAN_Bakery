import React from 'react';
import Divider from '../Divider';
import CartList from './CartList';

function CartSection() {
	return (
		<div className='flex flex-col items-center w-full md:w-11/12 xl:w-4/5'>
			<h2 className='text-textColor font-heading font-semibold text-3xl mt-16'>CART</h2>
			<Divider type='cart' />
			<CartList />
		</div>
	);
}

export default CartSection;
