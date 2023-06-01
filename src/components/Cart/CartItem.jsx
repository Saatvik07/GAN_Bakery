import React, { useMemo } from 'react';
import { getProductById, getItemQuantityFromCart } from '../../utils/cartUtils';
import QuantityCounter from '../Products/QuantityCounter';
import { useSelector } from 'react-redux';
import { QuantityCounterTypes } from '../../types/componetPropTypes/quantityCounter copy';

function CartItem({ id }) {
	const cart = useSelector((state) => state.cart);
	const product = useMemo(() => {
		return getProductById(id);
	});
	const itemQuantity = useMemo(() => {
		return getItemQuantityFromCart(cart, id);
	}, [cart, id]);

	return (
		<div className='flex flex-col w-full items-center'>
			<div className=' bg-accent-100 p-4 flex items-center w-full'>
				<img src={product.image} alt={product.title} className='w-1/12 h-auto' />
				<div className='w-9/12 flex items-center ml-8 justify-between'>
					<div className='flex flex-col'>
						<h1 className='text-textColor font-banner-heading font-bold text-xl'>{`${product.title} ($ ${product.price})`}</h1>
						<h3 className='text-textColor font-body text-lg'>
							Quantity: {itemQuantity}
						</h3>
					</div>
					<QuantityCounter id={id} type={QuantityCounterTypes.CART} />
				</div>
				<div className='w-2/12 flex items-center justify-center'>
					<span className='text-textColor font-body font-bold text-xl'>
						${product.price * itemQuantity}
					</span>
				</div>
			</div>
			<div className='w-full h-[0.25px] bg-textColor opacity-50'></div>
		</div>
	);
}

export default CartItem;
