import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonDetectPage } from './person-detect.page';

const routes: Routes = [
  {
    path: '',
    component: PersonDetectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonDetectPageRoutingModule {}
