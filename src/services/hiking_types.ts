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

export interface AddHike {
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
    img: [string];
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
    name: string;
    hikes: [];
    userid: string;
    _id: string;
}

export interface addCategory {
    name: string;
    userid: string;
}

