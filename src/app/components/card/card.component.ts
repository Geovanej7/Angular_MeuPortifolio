import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css','card.mobile.component.css','card.ultra.component.css']
})
export class CardComponent {
  @Input() data!: { title: string; link: string ; description: string };
}
