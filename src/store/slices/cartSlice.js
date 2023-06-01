import { createSlice } from '@reduxjs/toolkit';
import { CartOperationTypes } from '../../types/cartTypes';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart: {
			reducer(state, action) {
				state.push(action.payload);
			},
		},
		removeFromCart: {
			reducer(state, action) {
				return state.filter((item) => item.id !== action.payload.id);
			},
		},
		updateQuantityByOne: {
			reducer(state, action) {
				const { id, type } = action.payload;
				const item = state.find((item) => item.id === id);
				if (type === CartOperationTypes.ADD_ITEM) {
					item.quantity += 1;
				} else if (type === CartOperationTypes.REMOVE_ITEM) {
					if (item.quantity === 1) {
						return state.filter((item) => item.id !== id);
					}
					item.quantity -= 1;
				}
			},
		},
		clearCart: {
			reducer(state, action) {
				return [];
			},
		},
	},
});

export const { addToCart, removeFromCart, updateQuantityByOne, clearCart } = cartSlice.actions;
