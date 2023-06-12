import axios from "axios";
import {userStore} from "../stores";
import type {Category, Hike} from "./hiking_types";

export const hikingService = {
    baseUrl: "http://localhost:4000",

    async login(email: string, password: string): Promise<boolean> {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                userStore.set({
                    email: email,
                    token: response.data.token,
                    _id: response.data.id
                });
                localStorage.user = JSON.stringify({ email: email, token: response.data.token });
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        userStore.set({
            email: "",
            token: "",
            _id: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("user");
    },

    async signup(firstName: string, lastName: string, email: string, password: string): Promise<boolean> {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async getPublicHikes(): Promise<Hike[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/publichikes`);
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

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

    async getHike(id: string): Promise<Hike> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/hikes/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            return Promise.reject('Hike not found');
        }
    },

    checkPageRefresh() {
        if (!axios.defaults.headers.common["Authorization"]) {
            const userCredentials = localStorage.user;
            if (userCredentials) {
                const savedUser = JSON.parse(userCredentials);
                userStore.set({
                    email: savedUser.email,
                    token: savedUser.token,
                    _id: savedUser._id
                });
                axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
            }
        }
    },


};
