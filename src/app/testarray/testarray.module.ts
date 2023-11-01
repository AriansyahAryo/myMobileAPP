import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestarrayPageRoutingModule } from './testarray-routing.module';

import { TestarrayPage } from './testarray.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestarrayPageRoutingModule
  ],
  declarations: [TestarrayPage]
})
export class TestarrayPageModule {}
