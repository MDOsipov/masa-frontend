import { Injectable } from "@angular/core";
import { LocalStorageKeys } from "src/app/constants";
import { IPerson } from "src/app/entities";
import { LocalStorageService } from "./local-storage.service";

interface storedPerson {
    name: string;
    id: string;
    address: string;
    email: string;
    gender: string;
    birthdate: string;
    salary: number;
}

interface iPersonService {
    persons: IPerson[]
    initialize(): void;
}

@Injectable({
    providedIn: "root"
})
export class PersonService implements iPersonService {

    private _persons: IPerson[] = [];

    constructor(private localStorageService: LocalStorageService) {
    }

    public get persons(): IPerson[] {
        return this._persons;
    }

    public initialize(): void {
        const persons: storedPerson[] = this.localStorageService.get(LocalStorageKeys.PERSONS);

        this._persons = persons.map((person: storedPerson) => {
            return this.toLocal(person);
        });
    }

    private toLocal(person: storedPerson): IPerson {
        return {
            name: person.name,
            id: person.id,
            address: person.address,
            email: person.email,
            gender: person.gender,
            birthdate: new Date(person.birthdate),
            salary: person.salary
        }
    }
}