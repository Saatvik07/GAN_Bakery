import React from 'react';
import ProductIcon from '../../assets/cake.png';
import ChefClassIcon from '../../assets/chef.png';
import RecipeIcon from '../../assets/recipe.png';
import TopBannerCard from './TopBannerCard';
const TopBannerItemList = [
	{
		title: 'Products',
		description:
			'GAN Bakery is a bakery that sells a variety of cakes and breads that are very delicious and healthy.',
		image: ProductIcon, // <a href="https://www.flaticon.com/free-icons/dessert" title="dessert icons">Dessert icons created by Freepik - Flaticon</a>
	},
	{
		title: 'Chef Class',
		description:
			'GAN Bakery provides a variety of chef classes that can be followed by anyone who wants to learn to make cakes and breads.',
		image: ChefClassIcon, // <div> Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons"> Those Icons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
	},
	{
		title: 'Recipes',
		description:
			'Step by step recipes for making cakes and breads that are easy to follow and understand even for beginners.',
		image: RecipeIcon, // <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
	},
];

function TopBanner() {
	return (
		<div className='absolute left-1/2 top-12 md:top-16 lg:top-20 -translate-x-1/2 w-11/12 p-1 md:p-2 lg:p-4 flex flex-wrap items-center justify-between bg-accent-100 shadow-lg'>
			{TopBannerItemList.map((item, index) => {
				return (
					<TopBannerCard
						key={index}
						title={item.title}
						description={item.description}
						image={item.image}
					/>
				);
			})}
		</div>
	);
}

export default TopBanner;
