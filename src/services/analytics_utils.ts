import type { Category, ChartData, Hike} from "./hiking_types.ts";

export const analyticsUtils = {
    hikesInCategory(hikes: Hike[]) {
        return hikes.length;
    },
    totalDistanceInCategory(hikes: Hike[]) {
        let total = 0;
        for (let i = 0; i < hikes.length; i += 1) {
            total += hikes[i].distance;
        }
        return total;
    },
    averageDistanceInCategory(hikes: Hike[]) {
        let total = 0;
        for (let i = 0; i < hikes.length; i += 1) {
            total += hikes[i].distance;
        }
        return total / hikes.length || 0;
    },
    totalDurationInCategory(hikes: Hike[]) {
        let total = 0;
        for (let i = 0; i < hikes.length; i += 1) {
            total += hikes[i].duration;
        }
        return total;
    },
    averageDurationInCategory(hikes: Hike[]) {
        let total = 0;
        for (let i = 0; i < hikes.length; i += 1) {
            total += hikes[i].duration;
        }
        return total / hikes.length || 0;
    },

    hikeDataDistance(hikes: Hike[]): ChartData {
        const labels: string[] = [];
        const values: number[] = [];
        for (let i = 0; i < hikes.length; i += 1) {
            labels.push(hikes[i].name);
            values.push(hikes[i].distance);
        }
        return {labels, datasets: [{values}], colors: ['purple', '#ffa3ef', 'light-blue'],};
    },

    hikeDataDuration(hikes: Hike[]): ChartData {
        const labels: string[] = [];
        const values: number[] = [];
        for (let i = 0; i < hikes.length; i += 1) {
            labels.push(hikes[i].name);
            values.push(hikes[i].duration);
        }
        return {labels, datasets: [{values}], colors: ['purple', '#ffa3ef', 'light-blue'],};
    },

    hikeDataDistancePercentage(hikes: Hike[]): ChartData {
        const labels: string[] = [];
        const values: number[] = [];
        const total = this.totalDistanceInCategory(hikes);
        for (let i = 0; i < hikes.length; i += 1) {
            labels.push(hikes[i].name);
            values.push(hikes[i].distance / total * 100);
        }
        return {labels, datasets: [{values}], colors: ['purple', '#ffa3ef', 'light-blue'],};
    },

    hikeDataDurationPercentage(hikes: Hike[]): ChartData {
        const labels: string[] = [];
        const values: number[] = [];
        const total = this.totalDurationInCategory(hikes);
        for (let i = 0; i < hikes.length; i += 1) {
            labels.push(hikes[i].name);
            values.push(hikes[i].duration / total * 100);
        }
        return {labels, datasets: [{values}], colors: ['purple', '#ffa3ef', 'light-blue'],};
    }
};

