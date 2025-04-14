import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from "../../../components/contact/contact.component";

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ContactComponent,HttpClientModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

}
