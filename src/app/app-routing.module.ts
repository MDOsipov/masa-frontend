import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { States } from './constants';
import { NotFoundPage } from './core/pages/four-oh-four.page/four-oh-four.page';
import { PersonsPage } from './core/pages/persons/persons.page'
import { NewPage } from './core/pages/new-page/new.page'
import { RxjsPage } from './core/pages/rxjs/rxjs.page';
import { LoginPage } from './core/pages/login/login.page';
import { FlexBasicsPage } from './core/pages/flex-basics/flex-basics.page';
import { FlexTestPage } from './core/pages/flex-test/flex-test.page';



const routes: Routes = [
  { path: States.persons, component: PersonsPage },
  { path: States.new, component: NewPage },
  { path: States.rxjs, component: RxjsPage },
  { path: States.login, component: LoginPage },
  { path: States.flexBox, component: FlexBasicsPage },
  { path: States.flexTest, component: FlexTestPage },
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
