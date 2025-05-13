import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

/**
   * @description
   * Affiche les projets réalisés
   * @param {string} title - Le titre du projet
   * @param {string} description - La description du projet
   * @param {string} stack - La pile technologique utilisée
   * @param {string[]} stackicons - Les icônes de la pile technologique
   * @param {string} repolink - Le lien vers le dépôt du projet
   */
projects = [
    {
      title: 'Mediatek86',
      description: 'Application bureau windows de ressources humaines (POO, MVC, Winforms, authentification).',
      stack: 'C#, Winforms, SQL Server.',
      stackicons: ['./assets/technologies/cs.svg',
        './assets/technologies/mysql.svg',],
      repolink: 'https://github.com/filkat34/MediaTek86',

    },
    {
      title: 'TriBibli',
      description: 'Application de gestion de bibliothèque (POO, MVC, Winforms, sérialisation JSON).',
      stack: 'C#, JSON.',
      stackicons: ['./assets/technologies/cs.svg'],
      repolink: 'https://github.com/filkat34/TriBibliv2'
    },
    {
      title: 'LitToolkit',
      description: 'Application Web comportant un ensemble d\'outils pour l\'enseignement des lettres.',
      stack: 'Angular, TypeScript, HTML, CSS.',
      stackicons: ['./assets/technologies/angular.svg',
        './assets/technologies/bootstrap.svg',
        './assets/technologies/ts.svg',
        './assets/technologies/html.svg',
        './assets/technologies/css.svg',],
      repolink: 'https://github.com/filkat34/LitToolkit',
    },
    {
      title : 'Portfolio',
      description : 'Mon portfolio d\'étudiant en développement.',
      stack: 'Angular, TypeScript, HTML, CSS, Tailwind.',
      stackicons: ['./assets/technologies/angular.svg',
        './assets/technologies/tailwind.svg',
        './assets/technologies/ts.svg',
        './assets/technologies/html.svg',
        './assets/technologies/css.svg',],
      repolink: 'https://github.com/filkat34/portfolio'
    }
  ]

  searchTerm: string = ''; // Terme de recherche
  filteredProjects = this.projects; // Liste des projets filtrés

  // Fonction pour filtrer les projets
  filterProjects(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProjects = this.projects.filter(project =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.stack.toLowerCase().includes(term)
    );
  }
}
