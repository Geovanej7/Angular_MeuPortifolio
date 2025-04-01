import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css','menu.mobile.component.css','menu.ultra.component.css']
})
export class MenuComponent {

    // Variável que controla o estado do menu (aberto/fechado)
    isMenuOpen = false;

    // Método para alternar o estado do menu
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
    
}
