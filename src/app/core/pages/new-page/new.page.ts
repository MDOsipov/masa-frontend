import { Component, Input } from '@angular/core';
import { IPerson } from 'src/app/entities';
import { Topic } from '../../../constants';

interface IPersonWithGender extends IPerson {
  gender: string;
}
@Component({
  selector: 'app-new-page',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.less']
})

export class NewPage {
  public nameTopic: Topic = Topic.name;
  public addressTopic: Topic = Topic.address;
  public genderTopic: Topic = Topic.gender;
  public emailTopic: Topic = Topic.email;
  public buttonHandler: Topic = Topic.button;
  public closeForm: boolean = false;

  public JSON = JSON;

  public newPerson: IPersonWithGender = {
    id: '',
    name: '',
    gender: '',
    address: '',
    email: '',
    birthdate: new Date(),
    salary: 0
  };

  public names: string[] = ['Mikhail', 'Venya', 'Kolya'];
  public addresses: string[] = ["Haifa, Hene'emanim str.", 'Tel-Aviv, Dizzenfof str.', 'Jerusalem, Yaffo str.'];
  public genders: string[] = ['Male', 'Female', 'Transformer', 'Decepticon'];
  public emails: string[] = ['hey@yandex.ru', 'privet.gmail.com', 'shalom@gov.il.com'];

  public onPersonNameChange(newPersonName: string) {
    this.newPerson.name = newPersonName;
  }

  public onPersonAddressChange(newPersonAddress: string) {
    this.newPerson.address = newPersonAddress;
  }

  public onPersonGenderChange(newPersonGender: string) {
    this.newPerson.gender = newPersonGender;
  }

  public onPersonEmailChange(newPersonEmail: string) {
    this.newPerson.email = newPersonEmail;
  }

  public onCloseForm(flag: boolean) {
    this.closeForm = flag;
    console.log('Close form = ', this.closeForm);
  }

}
