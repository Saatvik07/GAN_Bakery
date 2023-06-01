import { products } from './data';

/** @typedef {import("../types/cartTypes").CartItem} CartItem */
/** @typedef {import("../types/productTypes").Product} Product*/

/**
 *
 * @param {Array<CartItem>} cart
 * @returns {Array<Product>}
 */

export const getRecommendations = (cart) => {
	const productIdsInCart = cart.map((product) => product.id);
	const recommendations = products.filter((product) => {
		return !productIdsInCart.includes(product.id);
	});
	return recommendations.slice(0, 3);
};
