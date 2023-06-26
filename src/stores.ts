import { writable } from "svelte/store";
import type {Category, LoggedInUser, Hike} from "./services/hiking_types";
import type {MarkerSpec} from "./services/markers.ts";

export const userStore = writable<LoggedInUser>({
    _id: "", email: "",
    token: "", role: ""
});
export const imageStore = writable<string[]>();
export const hikeStore = writable<Hike[]>();
export const filteredHikeStore = writable<Hike[]>();

export const markerSelected = writable<MarkerSpec>();

export const activeCategoryStore = writable<Category>({hikes: [], userid: "", _id: "", name: "All hikes"});
export const categoryStore = writable<Category[]>([]);

export const currentImageStore = writable<string>("");
export const currentTypeStore = writable<string>("bar");
