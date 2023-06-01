import React, { useMemo } from 'react';
import Minus from '../../assets/minus.png';
import Plus from '../../assets/plus.png';
import { useDispatch, useSelector } from 'react-redux';
import { getItemQuantityFromCart } from '../../utils/cartUtils';
import { updateQuantityByOne } from '../../store/slices/cartSlice';
import { CartOperationTypes } from '../../types/cartTypes';
import { QuantityCounterTypes } from '../../types/componetPropTypes/quantityCounter copy';

function QuantityCounter({ id, type }) {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const containerStyles = useMemo(() => {
		return type === QuantityCounterTypes.CART
			? 'flex w-1/3'
			: 'flex w-4/5 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2';
	}, [type]);
	const itemQuantity = useMemo(() => {
		return getItemQuantityFromCart(cart, id);
	}, [cart, id]);
	const handleDecrementQuantity = () => {
		dispatch(updateQuantityByOne({ id, type: CartOperationTypes.REMOVE_ITEM }));
	};
	const handleIncrementQuantity = () => {
		dispatch(updateQuantityByOne({ id, type: CartOperationTypes.ADD_ITEM }));
	};
	return (
		<div className={containerStyles}>
			<button onClick={handleDecrementQuantity} className='p-3 bg-textColor'>
				<img src={Minus} alt='decrement' className='w-4 h-4' />
				{/*
                    <a href="https://www.flaticon.com/free-icons/minus" title="minus icons">Minus icons created by Freepik - Flaticon</a>
                */}
			</button>
			<div className='w-full bg-accent-100 flex items-center justify-center border-textColor border'>
				<p className='text-textColor text-center font-body font-bold text-xl'>
					{itemQuantity}
				</p>
			</div>
			<button onClick={handleIncrementQuantity} className='p-3 bg-textColor'>
				<img src={Plus} alt='increment' className='w-4 h-4' />
				{/*
                    <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by Freepik - Flaticon</a>
                */}
			</button>
		</div>
	);
}

export default QuantityCounter;
