import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteNgComponent } from './teste-ng.component';
import { TesteNg2Component } from './teste-ng2/teste-ng2.component';
import { TesteNgService } from './teste-ng.service'

@NgModule({
  declarations: [
    TesteNgComponent,
    TesteNg2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TesteNgComponent
  ],
  providers:[TesteNgService]
})
export class TesteNgModule { }
