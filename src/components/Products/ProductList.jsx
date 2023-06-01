import React from 'react';
import ProductCard from './ProductCard';

const productList = [
	{
		title: 'Chocolate Cake',
		description:
			'Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or both.',
		image: 'https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg',
		price: 15,
	},
	{
		title: 'Strawberry Cake',
		description: 'Strawberry cake is a cake that uses strawberry as a topping or flavoring.',
		image: 'https://www.rainbownourishments.com/wp-content/uploads/2022/02/vegan-strawberry-cake-1-1-500x500.jpg',
		price: 15,
	},
	{
		title: 'Blueberry Cake',
		description: 'Blueberry cake is a cake that uses blueberry as a topping or flavoring.',
		image: 'https://cdn.shopify.com/s/files/1/1921/3233/articles/SUNCORE_FOODS_PURPLE_SWEET_POTATO_BUTTERCREAM_BLUEBERRY_CAKE_large.jpg?v=1630216803',
		price: 15,
	},
	{
		title: 'Lemon Cake',
		description: 'Blueberry cake is a cake that uses lemon as a topping or flavoring.',
		image: 'https://hips.hearstapps.com/hmg-prod/images/lemon-cake-recipe-2-1648571838.jpg?crop=0.502xw:1.00xh;0.234xw,0&resize=1200:*',
		price: 15,
	},
	{
		title: 'Chocolate Bread',
		description:
			'Chocolate bread is a bread flavored with melted chocolate, cocoa powder, or both.',
		image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps161034_TH163619D09_24_2b.jpg',
		price: 15,
	},
	{
		title: 'Strawberry Bread',
		description: 'Strawberry bread is a bread that uses strawberry as a topping or flavoring.',
		image: 'https://chocolatecoveredkatie.com/wp-content/uploads/2023/02/Strawberry-Bread-Recipe-jpg.webp',
		price: 15,
	},
	{
		title: 'Blueberry Bread',
		description: 'Blueberry bread is a bread that uses blueberry as a topping or flavoring.',
		image: 'https://thecookinchicks.com/wp-content/uploads/2022/06/IMG_0573.jpg',
		price: 15,
	},
	{
		title: 'Lemon Bread',
		description: 'Lemon bread is a bread that uses blueberry as a topping or flavoring.',
		image: 'https://www.foodandwine.com/thmb/TPXHBJxGwYx8RmLSOV9QGH897Yc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lemon-Pound-Cake-FT-RECIPE0223-29e941c231f74eb687af1e1c330b0adf.jpg',
		price: 15,
	},
];
function ProductList() {
	return (
		<div className='w-4/5 mb-24 flex flex-wrap items-start justify-evenly p-5'>
			{productList.map((product, index) => {
				return (
					<ProductCard
						key={index}
						title={product.title}
						image={product.image}
						description={product.description}
						price={product.price}
					/>
				);
			})}
		</div>
	);
}

export default ProductList;
