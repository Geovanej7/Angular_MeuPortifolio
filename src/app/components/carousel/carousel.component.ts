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

  cards = [
    { title: 'board de tarefas', link: 'https://github.com/Geovanej7/boards' , description: 'API Rest de um gerenciador de tarefas.'},
    { title: 'Medi-App', link: 'https://github.com/Geovanej7/NodeJs-MediApp', description: 'Projeto de agendamento de cunsultas para um consultório médico' },
    { title: 'Oxefood', link: 'https://github.com/Geovanej7/oxefood-api-geovane', description: 'API RESTfull construída em Java, que simula as funcionalidades básicas de um e-commerce.' },
    { title: 'Catalogo Online', link: 'https://github.com/Geovanej7/React-Catalogo', description: 'Aplicação web desenvolvida em react, onde qualquer pessoa pode criar um catálogo virtual para expor seus produtos na internet.' },
    { title: 'Em Breve', link: '', description: '...' }
  ];
  index = 0;
  cardsPerView = 2; // Padrão para desktop
  totalSlides = 0;

  constructor() {
    this.updateSlides(); // Define o número inicial de slides
  }

  ngOnInit() {
    setInterval(() => this.nextSlide(), 6000);
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