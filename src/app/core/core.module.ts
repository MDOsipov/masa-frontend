import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonCardComponent } from './components/person-card/person-card.component';

@NgModule({

    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        PersonCardComponent
    ],
    exports: [
        PersonCardComponent,
        CommonModule
    ]
})

export class CoreModule {

}