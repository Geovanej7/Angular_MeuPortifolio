import { Component, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css','carousel.mobile.component.css']
})
export class CarouselComponent {

  cards = ['APi board de tarefas', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];
  index = 0;
  cardsPerView = 2; // Padrão para desktop
  totalSlides = 0;

  constructor() {
    this.updateSlides(); // Define o número inicial de slides
  }

  ngOnInit() {
    setInterval(() => this.nextSlide(), 3000);
    this.updateSlides(); // Garante que o primeiro cálculo ocorra
  }

  @HostListener('window:resize') // Atualiza quando a tela for redimensionada
  updateSlides() {
    this.cardsPerView = window.innerWidth <= 768 ? 1 : 2; // 1 card por vez no mobile
    this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView); // Recalcula os slides
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