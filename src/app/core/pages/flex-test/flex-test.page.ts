import { Component } from '@angular/core'
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-flex-test',
  templateUrl: './flex-test.page.html',
  styleUrls: ['./flex-test.page.less']
})
export class FlexTestPage {
  public numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

  public addElement(): void {
    if ((Math.max(...this.numbers) + 1) > 32) {
      const myModal = new bootstrap.Modal('#staticBackdrop', {
        keyboard: false
      });
      myModal.show();
    }
    else {
      this.numbers.push(Math.max(...this.numbers) + 1);
    }
  }

  public arrayClean(): void {
    this.numbers.splice(7);
  }
}
