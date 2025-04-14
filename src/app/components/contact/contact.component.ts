import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContatoService } from '../../services/contact.service'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','./contact.mobile.component.css' ]
})
export class ContactComponent {

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    assunto: new FormControl('', Validators.required),
    mensagem: new FormControl('', Validators.required)
  });
  constructor(private contactService: ContatoService) {
    console.log("ok")
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.enviarFormulario(this.contactForm.value).subscribe({
        next: (res: any) => {
          console.log('Formulário enviado com sucesso!', res);
          this.contactForm.reset();
    },error: (err: any) => {
      console.error('Erro ao enviar formulário', err);
    }
   });
  }
 }
}