import { userStore} from "../../../../stores.ts";
import { userService} from "../../../../services/user_service.ts";
import { categoryService } from "../../../../services/category_service.ts";
import {get} from "svelte/store";
import {error} from "@sveltejs/kit";
export const ssr = false;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const load = async ({ params }) => {
    userService.checkPageRefresh();
    const user = get(userStore);
    if (user.email === "") {
        throw error(401, 'You have to be logged in to view this page');
    }
    return {
        category: await categoryService.getCategory(params._id),
    };
};
