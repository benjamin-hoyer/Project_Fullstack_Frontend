import { hikingService} from "../services/hiking_service";
export const ssr = false;
export const load = async () => {
    hikingService.checkPageRefresh();

    return {
        publicHikes: await hikingService.getPublicHikes(),
        categories: await hikingService.getCategories()
    };
};
