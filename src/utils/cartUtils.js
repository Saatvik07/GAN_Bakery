// @ts-check
/**@typedef {import("../types/cartTypes").CartItem} CartItem */

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
 * @param {Array<CartItem} cart
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
