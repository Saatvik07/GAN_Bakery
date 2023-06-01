// @ts-check
/**@typedef {import("../types/cartTypes").CartItem} CartItem */
/** @typedef {import("../types/productTypes").Product} Product */

import { products } from './data';

/**
 * Check whether an item with the given id exists in the cart
 * @param {Array<CartItem>} cart
 * @param {number} id
 * @returns {boolean}
 */
export const doesItemExistInCart = (cart = [], id = 0) => {
	return cart.findIndex((item) => item.id === id) !== -1;
};

/**
 * Gets the quantity of the item with the given id from the cart
 * @param {Array<CartItem>} cart
 * @param {number} id
 * @returns {number}
 */
export const getItemQuantityFromCart = (cart = [], id = 0) => {
	const item = cart.find((item) => item.id === id);
	return item ? item.quantity : 0;
};

/**
 * Get shortened item cart length
 * @param {Array<CartItem>} cart
 * @returns {string}
 */
export const getShortenedCartLength = (cart = []) => {
	const length = cart.length;
	if (length > 9) {
		return '9+';
	}
	return length.toString();
};

/**
 * Get item object by ID
 * @param {number} id
 * @return { Product | undefined}
 */
export const getProductById = (id) => {
	return products.find((product) => product.id === id);
};

/**
 * Get total price of all items in the cart
 * @param {Array<CartItem>} cart
 * @returns {number}
 */
export const getTotalPrice = (cart = []) => {
	return cart.reduce((total, item) => {
		const product = getProductById(item.id);
		if (product) {
			return total + product.price * item.quantity;
		}
		return total;
	}, 0);
};

/**
 * Get total quantity of all items in the cart
 * @param {Array<CartItem>} cart
 * @returns {number}
 * */
export const getTotalQuantity = (cart = []) => {
	return cart.reduce((total, item) => {
		return total + item.quantity;
	}, 0);
};
