import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestarrayPage } from './testarray.page';

const routes: Routes = [
  {
    path: '',
    component: TestarrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestarrayPageRoutingModule {}
