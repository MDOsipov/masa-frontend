import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageKeys } from 'src/app/constants';
import { LocalStorageService } from '../../services/local.storage.service';

export interface IPerson {
  name: string;
  id: string;
  address: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'app-persons.page',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.less']
})

export class PersonsPage implements OnInit {
  title = 'masa-frontend';

  constructor(private localStorageService: LocalStorageService) {

  }

  public ngOnInit(): void {
    this.persons = this.localStorageService.get(LocalStorageKeys.PERSONS);
  }

  public myProperty: string = "Hooray!!!";
  public htmlProperty: string = "<i>La la!</i>";

  public JSON = JSON;

  public person: IPerson = {
    name: 'Mikhail',
    id: '43552',
    address: 'Haifa',
    email: 'dos123',
    gender: 'male'
  }

  public persons: IPerson[] | null = null;


  public onClickMeClick(): void {
    this.myProperty = "New data!";
  }

  public onCardModeChanged(isEdit: boolean): void {
    this.cardMessage = isEdit ? "Please, fill the data" : "Data saved"
  }

  public onSaveClicked(): void {
    this.localStorageService.set(LocalStorageKeys.PERSONS, this.persons);
  }

  public cardMessage: string = "";

  public genderOptions: string[] = ['male', 'female'];
}
