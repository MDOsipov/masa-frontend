import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageKeys } from 'src/app/constants';
import { IPerson, ISelectableOption } from 'src/app/entities';
import { Layout } from 'src/app/enums';
import { PersonService } from '../../services/person.service';



@Component({
  selector: 'app-persons.page',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.less']
})

export class PersonsPage implements OnInit {

  public Layout = Layout;

  public layoutOptions: ISelectableOption<Layout>[] = [];
  public personOptions: ISelectableOption<IPerson>[] = [];

  public selectedPersons: IPerson[] = [];
  public selectedPersonLayout: Layout[] = [];

  public myProperty: string = "Hooray!!!";
  public htmlProperty: string = "<i>La la!</i>";
  public JSON = JSON;

  public person: IPerson = {
    name: 'Mikhail',
    id: '43552',
    address: 'Haifa',
    email: 'dos123',
    gender: 'male',
    birthdate: new Date(),
    salary:4054
  }

  constructor(public personService: PersonService) {}

  public ngOnInit(): void {
   
    this.layoutOptions.push({
      title: Layout.Horizontal,
      value: Layout.Horizontal
    },
    {
      title: Layout.Vertical,
      value: Layout.Vertical
    });

    if (this.personService.persons) 
    {
      this.personOptions = this.personService.persons?.map((person: IPerson) => {
        return {
          title: person.name,
          value: person
        };
      });

      // this.selectedPersons = this.personService.persons.length > 0 ? [this.personService.persons[0]] : [];
    }
  
  }

  public onClickMeClick(): void {
    this.myProperty = "New data!";
  }

  public onCardModeChanged(isEdit: boolean): void {
    this.cardMessage = isEdit ? "Please, fill the data" : "Data saved"
  }

  public onSaveClicked(): void {
    this.personService.save();
  }

  public cardMessage: string = "";

}
