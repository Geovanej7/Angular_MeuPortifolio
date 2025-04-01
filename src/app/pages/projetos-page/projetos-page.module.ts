import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos/projetos.component';



@NgModule({
  imports: [CommonModule, ProjetosComponent], 
    exports: [ProjetosComponent] 
})
export class ProjetosPageModule { }
