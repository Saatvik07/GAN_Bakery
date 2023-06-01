import React, { useMemo } from 'react';
import { getProductById, getTotalPrice } from '../../utils/cartUtils';
import { useSelector } from 'react-redux';

function CartTotal() {
	const cart = useSelector((state) => state.cart);
	const cartTotal = useMemo(() => {
		return getTotalPrice(cart);
	}, [cart]);
	const onCartCheckout = () => {
		console.log('Checkout invoice');
		cart.forEach((item) => {
			const product = getProductById(item.id);
			console.log(
				`Item ID: ${item.id}, Name: ${product.title}, Price: ${product.price}, Quantity: ${
					item.quantity
				}, Total: ${product.price * item.quantity}, Description: ${product.description}`,
			);
		});
	};
	return (
		<div className='bg-accent-200 w-full p-4 flex'>
			<div className='w-5/6 flex justify-between'>
				<button
					className='bg-textColor font-body  text-accent-100 rounded-lg py-2 px-8'
					onClick={onCartCheckout}
				>
					Checkout
				</button>
				<h1 className='text-textColor font-body font-bold text-xl'>Total:</h1>
			</div>
			<div className='w-1/6 flex justify-center'>
				<h1 className='text-textColor font-body font-bold text-xl'>${cartTotal}</h1>
			</div>
		</div>
	);
}

export default CartTotal;
