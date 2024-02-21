import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonPdfPage } from './person-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: PersonPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonPdfPageRoutingModule {}
