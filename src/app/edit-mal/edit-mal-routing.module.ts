import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMalPage } from './edit-mal.page';

const routes: Routes = [
  {
    path: '',
    component: EditMalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMalPageRoutingModule {}
