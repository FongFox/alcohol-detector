import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonDetectPageRoutingModule } from './person-detect-routing.module';

import { PersonDetectPage } from './person-detect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonDetectPageRoutingModule
  ],
  declarations: [PersonDetectPage]
})
export class PersonDetectPageModule {}
