import { ParseSourceFile } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ISelectableOption } from 'src/app/entities';
import { Layout } from 'src/app/enums';
import { v4 as uuidv4} from 'uuid';

@Component({
  selector: 'mf-generic-multiselect',
  templateUrl: './generic-multiselect.component.html',
  styleUrls: ['./generic-multiselect.component.less']
})
export class GenericMultiselectComponent<T> {
  @Input() value: T[] | undefined;
  @Input() options: ISelectableOption<T>[] = [];
  @Input() layout: Layout = Layout.Vertical;
  @Input() isMultiselect: boolean = false;
  @Output() valueChange: EventEmitter<T[]> = new EventEmitter<T[]>();
  @ViewChild("optionsWrapper") optionWrapper: ElementRef | undefined;

  public Layout = Layout;
  public JSON = JSON;
  public multiselectedValue: T[] = [];

  public ngOnInit() {
    this.layoutType = this.layout === Layout.Vertical ? "vertical" : "horizontal";
  }

  public unique: string = uuidv4();
  public layoutType: string = "";

  public onChange(option: T): void {
    
    if (!this.isMultiselect)
    {
      this.valueChange.emit([option]);
      console.log(this.value);
    }
    else {
      const index: number = this.value?.indexOf(option);
      if (index > - 1) {
        this.value?.splice(index, 1);
      }
      else {
        this.value.push(option);
      }
    }

  }
}
