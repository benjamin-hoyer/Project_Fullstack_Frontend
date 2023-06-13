import axios from "axios";
import {userStore} from "../stores";

export const userService = {
    baseUrl: "http://localhost:4000",

    async login(email: string, password: string): Promise<boolean> {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                userStore.set({
                    email: email,
                    token: response.data.token,
                    _id: response.data._id,
                    role: response.data.role
                });
                console.log(response.data);
                const user = JSON.stringify({ email: email, token: response.data.token, _id: response.data._id, role: response.data.role });
                localStorage.setItem("user", user);
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
            _id: "",
            role: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("user");
    },

    async signup(firstName: string, lastName: string, email: string, password: string): Promise<boolean> {
        try {
            const userDetails  = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },


    checkPageRefresh() {
        if (!axios.defaults.headers.common["Authorization"]) {
            const userCredentials = localStorage.getItem("user");
            if (userCredentials) {
                const savedUser = JSON.parse(userCredentials);
                userStore.set({
                    email: savedUser.email,
                    token: savedUser.token,
                    _id: savedUser._id,
                    role: savedUser.role
                });
                axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
            }
        }
    },


};
