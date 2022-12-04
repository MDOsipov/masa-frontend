import { Component, Input, Output, EventEmitter } from '@angular/core';

enum Mode {
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

  @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public buttonTitle: string = '';

  private _mode: Mode = Mode.Readonly;

  private setButtonTitle() {
    this.buttonTitle = this._mode === Mode.Readonly ? Edit : Save;
  }

  constructor() {
    this.setButtonTitle();
  }

  public onToggleModeClick(): void {
    this._mode = this._mode === Mode.Readonly ? Mode.Edit : Mode.Readonly;
    this.setButtonTitle();
    this.onModeChange.emit(this._mode === Mode.Edit);
  }

}
