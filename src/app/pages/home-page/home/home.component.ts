import { Component } from '@angular/core';
import { TitleComponent } from "../../../components/title/title.component";
import { BottonCvComponent } from "../../../components/botton-cv/botton-cv.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent, BottonCvComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
