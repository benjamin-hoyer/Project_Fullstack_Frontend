export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id: string;
}

export interface LoggedInUser {
    email: string;
    token: string;
    _id: string;
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
    lng: number;
    _id: string;
    img: string;
    visibility: string;
}

export interface Category {
    name: string;
    hikes: [Hike];
    userid: LoggedInUser;
    _id: string;
}
