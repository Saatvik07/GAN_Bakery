import React from 'react';
import Cupcake from '../assets/cupcake.png';
function Divider() {
	return (
		<div className='flex items-center w-4/5 md:w-2/3 lg:w-3/4 lg:my-10 mt-10 mb-5'>
			<div className='w-full h-[0.25px] bg-textColor opacity-50'></div>
			<img className='w-8 h-8 mx-4' src={Cupcake} alt='divider' />
			{/*
            <div>
				{' '}
				Icons made by{' '}
				<a href='https://www.freepik.com' title='Freepik'>
					{' '}
					Freepik{' '}
				</a>{' '}
				from{' '}
				<a href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com'
				</a>
			</div>
                */}
			<div className='w-full h-[0.25px] bg-textColor opacity-50'></div>
		</div>
	);
}

export default Divider;
