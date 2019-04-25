import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicosListaPage } from '../servicos/servicos';

@NgModule({
  declarations: [
    ServicosListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicosListaPage),
  ],
})
export class ServicosPageModule {}
