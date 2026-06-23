import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css','carousel.mobile.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {

  cards = [
    { title: 'board de tarefas', link: 'https://github.com/Geovanej7/boards', description: 'API Rest de um gerenciador de tarefas.' },
    { title: 'Medi-App', link: 'https://github.com/Geovanej7/NodeJs-MediApp', description: 'Projeto de agendamento de consultas para um consultório médico.' },
    { title: 'Oxefood', link: 'https://github.com/Geovanej7/oxefood-api-geovane', description: 'API RESTfull construída em Java que simula as funcionalidades básicas de um e-commerce.' },
    { title: 'Catálogo Online', link: 'https://github.com/Geovanej7/React-Catalogo', description: 'Aplicação web em React onde qualquer pessoa pode criar um catálogo virtual para expor produtos.' },
    { title: 'Em Breve', link: '', description: 'Novo projeto em desenvolvimento...' }
  ];

  index = 0;
  cardsPerView = 2;
  totalSlides = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.updateSlides();
    this.intervalId = setInterval(() => this.nextSlide(), 3000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  @HostListener('window:resize')
  updateSlides() {
    this.cardsPerView = window.innerWidth <= 768 ? 1 : 2;
    this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
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
