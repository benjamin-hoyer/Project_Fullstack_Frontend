import { hikingService} from "../../../../../services/hiking_service";
export const ssr = false;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const load = async ({ params }) => {
    hikingService.checkPageRefresh();

    return {
        hike: await hikingService.getHike(params.hikeid),
        category: await hikingService.getCategory(params._id),
    };
};
