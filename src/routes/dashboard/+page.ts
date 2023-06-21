import { userService} from "../../services/user_service.ts";
import { hikeService } from "../../services/hike_service.ts";
import { categoryService } from "../../services/category_service.ts";
import {userStore} from "../../stores.ts";
import {get} from "svelte/store";
import type {Hike} from "../../services/hiking_types.ts";
import {error} from "@sveltejs/kit";
export const ssr = false;
export const load = async () => {
    userService.checkPageRefresh();
    let userHikes: Hike[] = [];
    const user = get(userStore);
    if (user.email === "") {
        throw error(401, 'You have to be logged in to view this page');
    }
    const userCategories = await categoryService.getCategoriesByUserId(user._id);
    for (const category of userCategories) {
        userHikes = [...userHikes, ... await hikeService.getHikesByCategory(category._id)];
    }

    return {
        publicHikes: userHikes,
        categories: userCategories
    };
};
