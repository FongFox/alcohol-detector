import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonPdfComponent } from './components/person-pdf/person-pdf.component';

const routes: Routes = [
  { path: '', redirectTo: 'person-list', pathMatch: 'full' },
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-detail/:id', component: PersonDetailComponent },
  { path: 'person-pdf/:id', component: PersonPdfComponent },
  { path: '**', redirectTo: 'person-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
