import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'person-list',
    loadChildren: () =>
      import('./person-list/person-list.module').then(
        (m) => m.PersonListPageModule
      ),
  },
  {
    path: 'person-detect',
    loadChildren: () =>
      import('./person-detect/person-detect.module').then(
        (m) => m.PersonDetectPageModule
      ),
  },
  {
    path: 'person-detail/:id',
    loadChildren: () =>
      import('./person-detail/person-detail.module').then(
        (m) => m.PersonDetailPageModule
      ),
  },
  {
    path: 'person-pdf/:id',
    loadChildren: () =>
      import('./person-pdf/person-pdf.module').then(
        (m) => m.PersonPdfPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
