import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMalPageRoutingModule } from './edit-mal-routing.module';

import { EditMalPage } from './edit-mal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMalPageRoutingModule
  ],
  declarations: [EditMalPage]
})
export class EditMalPageModule {}
