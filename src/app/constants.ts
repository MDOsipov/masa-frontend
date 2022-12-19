export class LocalStorageKeys {
    public static PERSONS: string = "PERSONS";
}

export class States {
    public static persons: string = "persons";
    public static new: string = "new";
    public static rxjs: string = "rxjs";
    public static login: string = "login";
    public static flexBox: string = "flex-box";
    public static flexTest: string = "flex-test";
}

export enum Topic {
    name,
    address,
    gender,
    email,
    button
}

export class Endpoints {
    private static baseUrl: string = 'http://localhost:6060/';
    public static login: string = `${this.baseUrl}auth/login`;
    public static userById: string = `${this.baseUrl}user/`
}