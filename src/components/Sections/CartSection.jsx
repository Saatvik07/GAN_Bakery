import React from 'react';
import Divider from '../UI/Divider';
import CartList from '../Cart/CartList';
import { DividerTypes } from '../../types/componetPropTypes/divider';

function CartSection() {
	return (
		<div className='flex flex-col items-center w-11/12'>
			<h2 className='text-textColor font-heading font-semibold text-2xl lg:text-3xl xl:text-4xl mt-10 md:mt-12 lg:mt-14 xl:mt-16'>
				CART
			</h2>
			<Divider type={DividerTypes.CART} />
			<CartList />
		</div>
	);
}

export default CartSection;
