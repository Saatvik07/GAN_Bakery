import React, { useMemo } from 'react';
import { getProductById, getTotalPrice } from '../../utils/cartUtils';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../UI/Button/IconButton';
import { iconButtonTypes } from '../../types/componetPropTypes/iconButtonTypes';
import { clearCart } from '../../store/slices/cartSlice';

function CartTotal() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

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

	const onClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className='bg-accent-200 w-full p-2 md:p-3 lg:p-4 flex items-center'>
			<div className='w-3/4 sm:w-5/6 flex justify-between items-center'>
				<button
					className='bg-textColor font-body  text-accent-100 rounded-lg py-1 md:py-2 px-4 md:px-6 lg:px-8 text-sm sm:text-base  md:text-lg xl:text-xl'
					onClick={onCartCheckout}
				>
					Checkout
				</button>
				<h1 className='text-textColor font-body font-bold text-sm sm:text-base  md:text-lg xl:text-xl'>
					Total:
				</h1>
			</div>
			<div className='w-1/4 sm:w-1/6 flex justify-center'>
				<h1 className='text-textColor font-body font-bold text-sm sm:text-base  md:text-lg xl:text-xl'>
					${cartTotal}
				</h1>
				<IconButton iconName={iconButtonTypes.CLEAR_CART} onClick={onClearCart} />
			</div>
		</div>
	);
}

export default CartTotal;
