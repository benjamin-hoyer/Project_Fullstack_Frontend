import { writable } from "svelte/store";
import type {Category, LoggedInUser, Hike} from "./services/hiking_types";

export const userStore = writable<LoggedInUser>({
    _id: "", email: "",
    token: "", role: ""
});
export const categoryStore= writable<Category>();
export const imageStore = writable<string[]>();
export const publicHikeStore = writable<Hike[]>();
export const filteredPublicHikeStore = writable<Hike[]>();
