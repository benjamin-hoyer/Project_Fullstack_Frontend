import axios from 'axios';
import type { AddHikeType, Hike } from './types.ts';

export const hikeService = {
	baseUrl: 'https://hiking-b49i.onrender.com',

	async getPublicHikes(): Promise<Hike[]> {
		try {
			const response = await axios.get(`${this.baseUrl}/api/publichikes`);
			return response.data;
		} catch (error) {
			console.log(error);
			return [];
		}
	},

	async getHike(id: string): Promise<Hike> {
		try {
			const response = await axios.get(`${this.baseUrl}/api/hikes/${id}`);
			return response.data;
		} catch (error) {
			console.log(error);
			return Promise.reject('Hike not found');
		}
	},

	async updateHike(hike: Hike): Promise<boolean> {
		try {
			await axios.post(`${this.baseUrl}/api/hikes/${hike._id}`, hike);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async addHike(hike: AddHikeType, categoryid: string): Promise<boolean> {
		try {
			await axios.post(`${this.baseUrl}/api/categories/${categoryid}/hikes`, hike);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async deleteHike(id: string): Promise<boolean> {
		try {
			await axios.delete(`${this.baseUrl}/api/hikes/${id}`);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async uploadImage(id: string, image: File): Promise<boolean> {
		try {
			const formData = new FormData();
			formData.append('image', image);
			await axios.post(`${this.baseUrl}/api/hikes/${id}/uploadimage`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async getAllHikes(): Promise<Hike[]> {
		try {
			const response = await axios.get(`${this.baseUrl}/api/hikes`);
			return response.data;
		} catch (error) {
			console.log(error);
			return Promise.reject('Hike not found');
		}
	},

	async getHikesByCategory(id: string): Promise<Hike[]> {
		try {
			const response = await axios.get(`${this.baseUrl}/api/categories/${id}/hikes`);
			return response.data;
		} catch (error) {
			console.log(error);
			return [];
		}
	}
};
