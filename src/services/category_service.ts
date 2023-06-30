import axios from 'axios';
import { userStore } from '../stores';
import type { AddCategory, Category } from './types.ts';
import { get } from 'svelte/store';

export const categoryService = {
	baseUrl: 'https://hiking-b49i.onrender.com',

	async getCategories(): Promise<Category[]> {
		try {
			const response = await axios.get(`${this.baseUrl}/api/categories`);
			return response.data;
		} catch (error) {
			console.log(error);
			return [];
		}
	},

	async getCategory(id: string): Promise<Category> {
		try {
			const response = await axios.get(`${this.baseUrl}/api/categories/${id}`);
			return response.data;
		} catch (error) {
			console.log(error);
			return Promise.reject('Category not found');
		}
	},

	async getCategoriesByUserId(_id: string) {
		try {
			const response = await axios.get(`${this.baseUrl}/api/users/${_id}/categories`);
			return response.data;
		} catch (error) {
			console.log(error);
			return [];
		}
	},

	async addCategory(categoryName: string): Promise<Category> {
		const category: AddCategory = { name: '', userid: '' };
		try {
			category.name = categoryName;
			category.userid = get(userStore)._id;
			const response = await axios.post(`${this.baseUrl}/api/categories`, category);
			return response.data;
		} catch (error) {
			console.log(error);
			return { _id: '', name: '', userid: '', hikes: [] };
		}
	}
};
