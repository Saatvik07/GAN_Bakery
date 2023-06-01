import React, { useEffect, useState } from 'react';

const getShortenedDescription = (description) => {
	return description.substring(0, 50) + '...';
};
function ProductDescription({ value }) {
	const [description, setDescription] = useState('');
	useEffect(() => {
		if (value.length > 50) setDescription(getShortenedDescription(value));
	}, [value]);
	return (
		<div className='flex flex-col'>
			<p className='text-textColor text-sm font-body'>{description}</p>
			{description.length < value.length ? (
				<button
					className='text-textColor text-sm font-body underline self-end'
					onClick={() => {
						setDescription(value);
					}}
				>
					Read More
				</button>
			) : value.length > 50 ? (
				<button
					className='text-textColor text-sm font-body underline self-end'
					onClick={() => {
						setDescription(getShortenedDescription(value));
					}}
				>
					Read Less
				</button>
			) : null}
		</div>
	);
}

export default ProductDescription;
