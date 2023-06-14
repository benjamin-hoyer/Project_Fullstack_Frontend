import { hikeService } from "../../services/hike_service.ts";
import {userService} from "../../services/user_service.ts";
export const ssr = false;

export const load = async () => {
	userService.checkPageRefresh();
	const hikes = await hikeService.getAllHikes();
	return {
		hikes: hikes,
	};
};
