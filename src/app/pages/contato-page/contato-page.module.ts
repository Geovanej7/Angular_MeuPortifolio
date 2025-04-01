import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  imports: [CommonModule, ContatoComponent], 
    exports: [ContatoComponent] 
})
export class ContatoPageModule { }
