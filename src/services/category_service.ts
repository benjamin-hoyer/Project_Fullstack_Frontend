import axios from "axios";
import {userStore} from "../stores";
import type {Category, Hike} from "./hiking_types";

export const categoryService = {
    baseUrl: "http://localhost:4000",

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

    async getHikesByCategory(category: string): Promise<Hike[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/hikes/category/${category}`);
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }


};
