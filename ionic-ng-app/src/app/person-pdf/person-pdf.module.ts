import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonPdfPageRoutingModule } from './person-pdf-routing.module';

import { PersonPdfPage } from './person-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonPdfPageRoutingModule
  ],
  declarations: [PersonPdfPage]
})
export class PersonPdfPageModule {}
