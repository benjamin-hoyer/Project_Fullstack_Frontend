export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface LoggedInUser {
    email: string;
    token: string;
    _id: string;
    role: string;
}

export interface AddHikeType {
    name: string;
    start: string;
    end: string;
    distance: number;
    duration: number;
    description: string;
    lat: number;
    long: number;
    latend: number;
    longend: number;
    img: [];
    visibility: string;
}

export interface Hike {
    name: string;
    start: string;
    end: string;
    distance: number;
    duration: number;
    description: string;
    categoryid: string;
    lat: number;
    long: number;
    latend: number;
    longend: number;
    _id: string;
    img: [string];
    visibility: string;
}

export interface Category {
    hikes: [];
    name: string;
    userid: string;
    _id: string;
}

export interface AddCategory {
    name: string;
    userid: string;
}

export interface ChartData {
    labels: string[];
    datasets: [{ values: number[] }];
    colors: [string],
}


