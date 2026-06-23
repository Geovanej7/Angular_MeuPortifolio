import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css','card.mobile.component.css','card.ultra.component.css']
})
export class CardComponent {
  @Input() data!: { title: string; link: string ; description: string };
}
