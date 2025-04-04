import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  cards = ['APi board de tarefas', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];
  index = 0;
  cardsPerView = 2; // Quantos indicadores
  totalSlides = Math.ceil(this.cards.length / this.cardsPerView); // Número de indicadores corretos

  ngOnInit() {
    setInterval(() => this.nextSlide(), 3000);
  }

  nextSlide() {
    this.index = (this.index + 1) % this.totalSlides;
  }

  prevSlide() {
    this.index = (this.index - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(i: number) {
    this.index = i;
  }

  getIndicators() {
    return Array(this.totalSlides).fill(0).map((_, i) => i);
  }
}
