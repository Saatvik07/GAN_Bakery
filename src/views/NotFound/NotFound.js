import React from 'react';
import HomeButton from '../../components/UI/Button/HomeButton';
import Divider from '../../components/UI/Divider';
import { Link } from 'react-router-dom';
function NotFound() {
	return (
		<div className='bg-background flex flex-col items-center min-h-screen'>
			<div className='flex flex-col items-center w-11/12'>
				<h2 className='text-textColor font-heading font-semibold text-7xl mt-16'>404</h2>
				<Divider />
				<h4 className='text-textColor font-heading font-semibold text-2xl mt-4'>
					The page you were looking for wasn't found, visit the{' '}
					<Link to='/' className='underline'>
						Home
					</Link>{' '}
					page for more details
				</h4>
			</div>
			<HomeButton />
		</div>
	);
}

export default NotFound;
