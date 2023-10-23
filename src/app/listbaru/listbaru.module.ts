import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListbaruPageRoutingModule } from './listbaru-routing.module';

import { ListbaruPage } from './listbaru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListbaruPageRoutingModule
  ],
  declarations: [ListbaruPage]
})
export class ListbaruPageModule {}
