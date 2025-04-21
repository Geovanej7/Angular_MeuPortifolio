import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContatoService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', './contact.mobile.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    assunto: new FormControl('', Validators.required),
    mensagem: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  isSending = false;
  successMessage = '';
  canResend = true;
  showForm = true;

  countdown = 300; // 5 minutos em segundos
  interval: any;

  constructor(private contactService: ContatoService) {}

  formatTime(seconds: number): string {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  }

  startCountdown() {
    this.interval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.interval);
        this.canResend = true;
        this.successMessage = '';
        this.showForm = true;
        this.countdown = 300;
      }
    }, 1000);
  }

  onSubmit() {
    if (this.contactForm.valid && this.canResend) {
      this.isSending = true;
      this.showForm = false;

      this.contactService.enviarFormulario(this.contactForm.value).subscribe({
        next: () => {
          this.isSending = false;
          this.successMessage = 'Mensagem enviada com sucesso!';
          this.contactForm.reset();
          this.canResend = false;

          this.startCountdown();
        },
        error: (err) => {
          console.error('Erro ao enviar formulário', err);
          this.isSending = false;
          this.showForm = true;
        }
      });
    }
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get assunto() {
    return this.contactForm.get('assunto')!;
  }

  get mensagem() {
    return this.contactForm.get('mensagem')!;
  }
}
