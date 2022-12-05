import { Component, Input, Output, EventEmitter } from '@angular/core';

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
export class PersonCardComponent {
  @Input() personName: string = "";
  @Input() personId: string = "";
  @Input() personAddress: string = "";
  @Input() personEmail: string = "";

  @Output() personNameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personIdChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personAddressChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personEmailChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public ViewMode = ViewMode;

  public buttonTitle: string = '';

  public mode: ViewMode = ViewMode.Readonly;

  private setButtonTitle() {
    this.buttonTitle = this.mode === ViewMode.Readonly ? Edit : Save;
  }

  public onPersonNameChange(): void {
    this.personNameChange.emit(this.personName);
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

  public onToggleModeClick(): void {
    this.mode = this.mode === ViewMode.Readonly ? ViewMode.Edit : ViewMode.Readonly;
    this.setButtonTitle();
    this.onModeChange.emit(this.mode === ViewMode.Edit);
  }

}
