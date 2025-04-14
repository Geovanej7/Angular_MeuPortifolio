import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, ContatoComponent,HttpClientModule], 
    exports: [ContatoComponent] 
})
export class ContatoPageModule { }
