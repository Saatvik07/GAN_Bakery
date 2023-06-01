import React from 'react';
import HomeIcon from '../../../assets/home.png';
import { useNavigate } from 'react-router-dom';
function HomeButton() {
	const navigate = useNavigate();
	const onHomeButtonClick = () => {
		navigate('/');
	};

	return (
		<div className='fixed right-4 bottom-4 md:right-8 md:bottom-8 lg:right-12 lg:bottom-12'>
			<button
				className=' bg-accent-100 rounded-full p-3 md:p-4 lg:p-5 relative'
				onClick={onHomeButtonClick}
			>
				<img src={HomeIcon} alt='home' className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8' />
				{/*
          			<a href="https://www.flaticon.com/free-icons/home" title="home icons">Home icons created by Freepik - Flaticon</a>
				*/}
			</button>
		</div>
	);
}

export default HomeButton;
