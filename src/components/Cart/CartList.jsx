import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import CartTotal from './CartTotal';

function CartList() {
	const cart = useSelector((state) => state.cart);
	return (
		<div className='w-full md:w-11/12 xl:w-4/5 flex flex-col'>
			{cart.length === 0 ? (
				<h1 className='text-textColor font-body font-bold text-2xl text-center opacity-70 mb-16 md:mb-20 xl:mb-24'>
					Your cart is empty
				</h1>
			) : (
				<>
					{cart.map((product, index) => {
						return <CartItem id={product.id} key={index} />;
					})}
					<CartTotal />
				</>
			)}
		</div>
	);
}

export default CartList;
