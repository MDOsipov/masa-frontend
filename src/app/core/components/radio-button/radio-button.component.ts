import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Topic } from '../../../constants';

enum Mode {
  edit,
  save
}

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less']
})
export class RadioButtonComponent implements OnInit {
  public Topic = Topic;
  public Mode = Mode;
  public buttonTitle: string = 'save';
  public mode: Mode = Mode.save;


  @Input() topic: Topic = Topic.name;
  @Input() nameOption: string = '';
  @Input() addressOption: string = '';
  @Input() genderOption: string = '';
  @Input() emailOption: string = '';



  @Input() personName: string = '';
  @Input() personAddress: string = '';
  @Input() personGender: string = '';
  @Input() personEmail: string = '';

  @Output() personNameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personIdChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personAddressChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personEmailChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personGenderChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() modeChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  public ngOnInit(): void {
    console.log('Mode = ' + this.mode + ' (Save = ' + Mode.save + ', Edit = ' + Mode.edit + ')');
  }

  public onPersonNameChange(newPersonName: any) {
    this.personName = newPersonName.target.value;
    this.personNameChange.emit(this.personName);
  }

  public onPersonAddressChange(newPersonAddress: any) {
    this.personAddress = newPersonAddress.target.value;
    this.personAddressChange.emit(this.personAddress);
  }

  public onPersonGenderChange(newPersonGender: any) {
    this.personGender = newPersonGender.target.value;
    this.personGenderChange.emit(this.personGender);
  }

  public onPersonEmailChange(newPersonEmail: any) {
    this.personEmail = newPersonEmail.target.value;
    this.personEmailChange.emit(this.personEmail);
  }

  public onToggleModeClick(): void {
    this.mode = this.mode === Mode.edit ? Mode.save : Mode.edit;
    console.log('Mode = ' + this.mode + ' (Save = ' + Mode.save + ', Edit = ' + Mode.edit + ')');
    this.buttonTitle = this.buttonTitle === 'save' ? 'edit' : 'save';

    if (this.mode === Mode.edit) {
      this.modeChange.emit(true);
      console.log('Emit true');
    } else {
      this.modeChange.emit(false);
      console.log('Emit false');
    }
  }

}
