import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ISelectableOption } from 'src/app/entities';
import { Layout } from 'src/app/enums';
import { v4 as uuidv4} from 'uuid';

@Component({
  selector: 'mf-generic-radio-button',
  templateUrl: './generic-radio-button.component.html',
  styleUrls: ['./generic-radio-button.component.less']
})
export class GenericRadioButtonComponent<T> {
  @Input() value: T | undefined;
  @Input() options: ISelectableOption<T>[] = [];
  @Input() layout: Layout = Layout.Vertical;
  @Input() isMultiselect: boolean = false;
  @Output() valueChange: EventEmitter<T> = new EventEmitter<T>();
  @ViewChild("optionsWrapper") optionWrapper: ElementRef | undefined;

  public Layout = Layout;

  public ngOnInit() {
    this.layoutType = this.layout === Layout.Vertical ? "vertical" : "horizontal";
  }

  public unique: string = uuidv4();
  public layoutType: string = "";

  public onChange(): void {
    this.valueChange.emit(this.value);
  }
}
