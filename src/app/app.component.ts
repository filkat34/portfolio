import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio F. Katsanos';
  constructor(private router: Router) { }

  hover: boolean = false; // État du survol

  contactIcons = [
    {
      href: 'https://github.com/filkat34',
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'fab fa-github fa-l',
      color: 'text-black'
    },
    {
      href: 'mailto:filippos.katsanos@protonmail.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'fas fa-envelope fa-l',
      color: 'text-black'
    },
    {
      href: 'https://www.linkedin.com/in/fkatsanos/',
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'fab fa-linkedin fa-l',
      color: 'text-black'
    },
  ];


  isHomeRouteActive(): boolean {
    return this.router.url === '/home';
  }

  getAccueilText(): string {
    if (!this.isHomeRouteActive()) {
      return this.hover ? '&lt;Accueil/&gt;' : '&lt;/&gt;';
    }
    return '&lt;Accueil/&gt;';
  }

  isDarkMode = false; // Par défaut, le mode clair est activé

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const htmlElement = document.documentElement;

    if (this.isDarkMode) {
      htmlElement.classList.add('dark'); // Ajoute la classe "dark" pour activer le mode sombre
      console.log('Mode sombre activé');
    } else {
      htmlElement.classList.remove('dark'); // Supprime la classe "dark" pour revenir au mode clair
      console.log('Mode sombre désactivé')
    };
  }
}
