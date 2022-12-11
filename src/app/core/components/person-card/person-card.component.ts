import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

enum ViewMode {
  Readonly,
  Edit
}

const Edit: string = 'Edit';
const Save: string = "Save";

@Component({
  selector: 'mf-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.less']
})
export class PersonCardComponent implements OnInit {
  @Input() personName: string = "";
  @Input() personId: string = "";
  @Input() personAddress: string = "";
  @Input() personEmail: string = "";
  @Input() personGender: string = "";

  public genderOptions: string[] = ['male', 'female'];


  @Output() personNameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personIdChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personAddressChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personEmailChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personGenderChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSaveClicked: EventEmitter<void> = new EventEmitter<void>();

  public ViewMode = ViewMode;

  public buttonTitle: string = '';

  public mode: ViewMode = ViewMode.Readonly;

  private setButtonTitle() {
    this.buttonTitle = this.mode === ViewMode.Readonly ? Edit : Save;
  }

  public onPersonNameChange(): void {
    this.personNameChange.emit(this.personName);
  }

  public onPersonGenderChange(): void {
    this.personGenderChange.emit(this.personGender);
  }


  public onPersonIdChange(): void {
    this.personIdChange.emit(this.personId);
  }

  public onPersonAddressChange(): void {
    this.personAddressChange.emit(this.personAddress);
  }

  public onPersonEmailChange(): void {
    this.personEmailChange.emit(this.personEmail);
  }

  constructor() {
    this.setButtonTitle();
  }

  public ngOnInit(): void {
    console.log("Name in OnInit: ", this.personName);
  }

  public onToggleModeClick(): void {
    if (this.mode === ViewMode.Edit) {
      this.onSaveClicked.emit();
    }

    this.mode = this.mode === ViewMode.Readonly ? ViewMode.Edit : ViewMode.Readonly;
    this.setButtonTitle();
    this.onModeChange.emit(this.mode === ViewMode.Edit);
  }

}
