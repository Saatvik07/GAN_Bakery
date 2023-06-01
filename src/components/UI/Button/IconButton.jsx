import React, { useMemo } from 'react';
import { iconButtonTypes } from '../../../types/componetPropTypes/iconButtonTypes';
import BinIcon from '../../../assets/bin.png';
import CancelIcon from '../../../assets/cancel.png';

function IconButton({ iconName, onClick }) {
	const icon = useMemo(() => {
		switch (iconName) {
			case iconButtonTypes.CLEAR_CART:
				// <div> Icons made by <a href="https://www.flaticon.com/authors/gofox" title="GOFOX"> GOFOX </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
				return BinIcon;
			case iconButtonTypes.REMOVE_FROM_CART:
				// <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
				return CancelIcon;
			default:
				return null;
		}
	}, [iconName]);
	return (
		<button onClick={onClick} className='ml-3'>
			<img src={icon} alt='home' className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' />
		</button>
	);
}

export default IconButton;
