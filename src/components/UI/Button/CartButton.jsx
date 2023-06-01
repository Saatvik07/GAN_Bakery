import React from 'react';
import CartIcon from '../../../assets/cart.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getShortenedCartLength } from '../../../utils/cartUtils';
function CartButton() {
	const cart = useSelector((state) => state.cart);
	const navigate = useNavigate();
	const onCartButtonClick = () => {
		navigate('/cart');
	};

	return (
		<div className='fixed right-4 bottom-4 md:right-8 md:bottom-8 lg:right-12 lg:bottom-12'>
			<button
				className=' bg-accent-100 rounded-full p-3 md:p-4 lg:p-5 relative shadow-xl'
				onClick={onCartButtonClick}
			>
				{cart.length > 0 ? (
					<div className='bg-textColor text-accent-100 rounded-full text-2xs md:text-xs lg:text-sm font-bold font-body absolute p-1 px-2 top-0 right-0 -translate-y-2'>
						{getShortenedCartLength(cart)}
					</div>
				) : null}
				<img src={CartIcon} alt='cart' className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8' />
				{/*
				<a href="https://www.flaticon.com/free-icons/retail" title="retail icons">Retail icons created by Frey Wazza - Flaticon</a>
				*/}
			</button>
		</div>
	);
}

export default CartButton;
