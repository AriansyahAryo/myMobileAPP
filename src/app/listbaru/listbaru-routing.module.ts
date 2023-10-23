import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListbaruPage } from './listbaru.page';

const routes: Routes = [
  {
    path: '',
    component: ListbaruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListbaruPageRoutingModule {}
