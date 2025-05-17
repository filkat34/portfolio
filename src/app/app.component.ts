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

  /**
   * Initialisations
   * @param router 
   * @description initialise routeur et activation du mode sombre par défaut.
   */
  constructor(private router: Router) {
    document.documentElement.classList.add('dark');//Active le mode sombre par défaut
   }

  /**
   * Variables
   */
  title = 'Portfolio F. Katsanos';
  hover: boolean = false;// Variable pour contrôler l'affichage au survol
  isDarkMode = true; // Par défaut, le mode sombre est activé


//Vérifier si la route actuelle est la page d'accueil
  isHomeRouteActive(): boolean {
    return this.router.url === '/home';
  }

  //Gérer l'effet de survol de l'accueil
  getAccueilText(): string {
    if (!this.isHomeRouteActive()) {
      return this.hover ? '&lt;Accueil/&gt;' : '&lt;/&gt;';
    }
    return '&lt;/&gt;';
  }

  /**
   * Fonction pour gérer le mode sombre
   */
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

  /**
   * Icones de contact
   */
  contactIcons = [
    {
      href: 'https://github.com/filkat34',
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'fab fa-github fa-l',
      color: 'text-black',
      label: 'GitHub',
    },
    {
      href: 'mailto:filippos.katsanos@protonmail.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'fas fa-envelope fa-l',
      color: 'text-black',
      label: 'Email',
    },
    {
      href: 'https://www.linkedin.com/in/fkatsanos/',
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'fab fa-linkedin fa-l',
      color: 'text-black',
      label: 'LinkedIn',
    },
  ];
}
