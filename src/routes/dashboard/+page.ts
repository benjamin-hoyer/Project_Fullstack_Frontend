import { userService} from "../../services/user_service.ts";
import { hikeService } from "../../services/hike_service.ts";
import { categoryService } from "../../services/category_service.ts";
import {userStore} from "../../stores.ts";
import {get} from "svelte/store";
import type {Hike} from "../../services/hiking_types.ts";
export const ssr = false;
export const load = async () => {
    userService.checkPageRefresh();
    let userHikes: Hike[] = [];
    let user = get(userStore);
    const userCategories = await categoryService.getCategoriesByUserId(user._id);
    for (const category of userCategories) {
        userHikes = [...userHikes, ... await hikeService.getHikesByCategory(category._id)];

    }

    return {
        publicHikes: userHikes,
        categories: userCategories
    };
};
