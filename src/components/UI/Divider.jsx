import React from 'react';
import Cupcake from '../../assets/cupcake.png';
import CartIcon from '../../assets/cart.png';
import RecommendationIcon from '../../assets/bookmark.png';
import ReviewIcon from '../../assets/favourite.png';
import { DividerTypes } from '../../types/componetPropTypes/divider';
function Divider({ type }) {
	return (
		<div className='flex items-center w-4/5 md:w-2/3 lg:w-3/4 lg:my-10 mt-4 md:mt-6 lg:mt-10 mb-5'>
			<div className='w-full h-[0.25px] bg-textColor opacity-50'></div>
			{type === DividerTypes.HOMEPAGE ? (
				<img
					className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mx-4'
					src={Cupcake}
					alt='divider'
				/>
			) : type === DividerTypes.CART ? (
				<img
					className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mx-4'
					src={CartIcon}
					alt='divider'
				/>
			) : type === DividerTypes.RECOMMENDATION ? (
				<img
					className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mx-4'
					src={RecommendationIcon}
					alt='divider'
				/>
			) : type === DividerTypes.REVIEWS ? (
				<img
					className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mx-4'
					src={ReviewIcon}
					alt='divider'
				/>
			) : null}
			{/*
				<a href='https://www.freepik.com' title='Freepik'>
					{' '}
					Freepik{' '}
				</a>{' '}
				from{' '}
				<a href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com'
				</a>
				<a href="https://www.flaticon.com/free-icons/recommended" title="recommended icons">Recommended icons created by microstd - Flaticon</a>
				<a href="https://www.flaticon.com/free-icons/customer-review" title="customer review icons">Customer review icons created by Freepik - Flaticon</a>
            */}
			<div className='w-full h-[0.25px] bg-textColor opacity-50'></div>
		</div>
	);
}

export default Divider;
