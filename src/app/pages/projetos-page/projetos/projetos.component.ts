import { Component } from '@angular/core';
import { CarouselComponent } from "../../../components/carousel/carousel.component";

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [ CarouselComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {

}
