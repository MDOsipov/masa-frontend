import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { States } from '../constants';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonsPage } from './pages/persons/persons.page';
import { NotFoundPage } from './pages/four-oh-four.page/four-oh-four.page';
import { NewPage } from './pages/new-page/new.page';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioButtonSecondComponent } from './components/radio-button-second/radio-button-second.component';
import { GenericMultiselectComponent } from './components/generic-radio-button/generic-multiselect.component';
import { DoublePipe } from './pipes/double.pipe';
import { PersonService } from './services/person.service';
import { RxjsPage } from './pages/rxjs/rxjs.page';
import { LoginPage } from './pages/login/login.page';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        PersonCardComponent,
        PersonsPage,
        NotFoundPage,
        NewPage,
        RadioButtonComponent,
        RadioButtonSecondComponent,
        GenericMultiselectComponent,
        DoublePipe,
        RxjsPage,
        LoginPage
    ],
    exports: [
        PersonCardComponent,
        CommonModule
    ]
})

export class CoreModule {
    constructor(personService: PersonService) {
        personService.initialize();
    }
}  