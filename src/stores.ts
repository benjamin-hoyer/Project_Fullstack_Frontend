import { writable } from "svelte/store";
import type {Category, LoggedInUser, Hike} from "./services/hiking_types";
import type {MarkerSpec} from "./services/markers.ts";
import type {LatLng} from "leaflet";

export const userStore = writable<LoggedInUser>({
    _id: "", email: "",
    token: "", role: ""
});
export const imageStore = writable<string[]>();
export const publicHikeStore = writable<Hike[]>();
export const filteredPublicHikeStore = writable<Hike[]>();

export const markerSelected = writable<MarkerSpec>();

export const polyLine = writable<[number, number]>();
export const polyLineEnd = writable<[number, number]>();

