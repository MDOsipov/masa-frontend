import { Component } from '@angular/core';

interface IPerson {
  name: string;
  id: string;
  address: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'masa-frontend';
  public myProperty: string = "Hooray!!!";
  public htmlProperty: string = "<i>La la!</i>";

  public JSON = JSON;

  public person: IPerson = {
    name: 'Mikhail',
    id: '43552',
    address: 'Haifa',
    email: 'dos123'
  }

  public onClickMeClick(): void {
    this.myProperty = "New data!";
  }

  public onCardModeChanged(isEdit: boolean): void {
    this.cardMessage = isEdit ? "Please, fill the data" : "Data saved"
  }

  public cardMessage: string = "";
}
