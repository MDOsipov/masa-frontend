import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuidv4} from 'uuid';

@Component({
  selector: 'mf-radio-button-second',
  templateUrl: './radio-button-second.component.html',
  styleUrls: ['./radio-button-second.component.less']
})
export class RadioButtonSecondComponent {
  @Input() value: string = "";
  @Input() options: string[] = [];
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  public unique: string = uuidv4();


  public onChange(): void {
    this.valueChange.emit(this.value);
  }


}
