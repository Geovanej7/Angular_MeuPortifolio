import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre/sobre.component';



@NgModule({
  imports: [CommonModule, SobreComponent], 
  exports: [SobreComponent] 
})
export class SobrePageModule { }
