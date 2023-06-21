import { hikeService } from "../../services/hike_service.ts";
import {userService} from "../../services/user_service.ts";
import {error} from "@sveltejs/kit";
import {get} from "svelte/store";
import {userStore} from "../../stores.ts";
export const ssr = false;

export const load = async () => {
	userService.checkPageRefresh();
	const user = await get(userStore)
	if (user.email === "") {
		throw error(401, 'You have to be logged in to view this page');
	}
	const hikes = await hikeService.getAllHikes();
	return {
		hikes: hikes,
	};
};
