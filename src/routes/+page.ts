import { userService} from "../services/user_service.ts";
import { hikeService } from "../services/hike_service.ts";
import { categoryService } from "../services/category_service.ts";
export const ssr = false;
export const load = async () => {
    userService.checkPageRefresh();

    return {
        publicHikes: await hikeService.getPublicHikes(),
        categories: await categoryService.getCategories()
    };
};
