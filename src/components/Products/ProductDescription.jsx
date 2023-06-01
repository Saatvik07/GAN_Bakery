import React, { useEffect, useState } from 'react';
import UpArrow from '../../assets/up-arrow.png';
import DownArrow from '../../assets/down-arrow.png';

const getShortenedDescription = (description) => {
	return description.substring(0, 50) + '...';
};
function ProductDescription({ value }) {
	const [description, setDescription] = useState('');
	useEffect(() => {
		if (value.length > 50) setDescription(getShortenedDescription(value));
	}, [value]);
	return (
		<div className='flex flex-col mb-2'>
			<p className='text-textColor text-xs md:text-sm font-body'>{description}</p>
			{description.length < value.length ? (
				<button
					className='text-textColor text-sm font-body underline self-end'
					onClick={() => {
						setDescription(value);
					}}
				>
					<img src={DownArrow} alt='read more' className='w-3 h-3 mr-1' />
					{/*
                        <a href='https://www.flaticon.com/free-icons/arrow' title='arrow icons'>
                            Arrow icons created by Freepik - Flaticon
                        </a>
                    */}
				</button>
			) : value.length > 50 ? (
				<button
					className='text-textColor text-xs md:text-sm font-body underline self-end'
					onClick={() => {
						setDescription(getShortenedDescription(value));
					}}
				>
					<img src={UpArrow} alt='read less' className='w-3 h-3 mr-1' />
					{/*
                        <div> Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons"> Roundicons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
                    */}
				</button>
			) : null}
		</div>
	);
}

export default ProductDescription;
