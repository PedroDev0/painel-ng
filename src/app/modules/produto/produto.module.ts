import { NgModule } from '@angular/core';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';

import { SharedModule as MyShared } from 'src/app/shared/shared.module';
import { GalleriaModule } from 'primeng/galleria';

import { ProdutoFrmComponent } from './produto-frm/produto-frm.component';
import { SharedModule } from 'primeng/api';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  exports: [ProdutoComponent],
  declarations: [
    ProdutoComponent,
    ProdutoFrmComponent
  ],
  imports: [
    ProdutoRoutingModule,
    GalleriaModule,
    MyShared,
    SharedModule,
    DynamicDialogModule
  ]
})
export class ProdutoModule { }
