import { Component } from '@angular/core';
import { Observable, Observer, of, Subscription, tap, map } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.page.html',
  styleUrls: ['./rxjs.page.less']
})
export class RxjsPage {

  constructor() {
    // this.simpleSubscription();
    // this.fullSubscription();
    // this.subscriptionWithTap();
    this.subscriptionWithMap();
  }

  private simpleSubscription(): void {
    // Observable creation
    const observable$: Observable<number> = of(1, 2, 3);

    // Simple subscription
    observable$.subscribe((item: number) => {
      console.log(item)
    });
  }

  private fullSubscription(): void {
    // Observable creation
    const observable$: Observable<number> = of(1, 2, 3);

    // Observe with next, error, complete 
    const observer: Observer<number> = {
      next(value: number) {
        if (value === 2) {
          throw new Error("Bad value");
        }
        console.log(value);
      },
      error(err) {
        console.error(err);
      },
      complete() {
        console.log("Observer completed");
      }
    }

    observable$.subscribe(observer);
  }

  private subscriptionWithTap(): void {
     // Observable creation
    const observable$: Observable<number> = of(1, 2, 3);
    
    observable$.pipe(
      tap((item: number) => {
        console.log(item)
      })
    ).subscribe();
  }

  private subscriptionWithMap(): void {
    // Observable creation
   const observable$: Observable<number> = of(1, 2, 3);
   
   observable$.pipe(
    map((item: number) => {
      return item + '-cool!';
    }),
    map((item: string) => {
      return item.substring(0, 4);
    })
   ).subscribe((item: string) => {
     console.log('Final: ' + item);
   });
 }
}
