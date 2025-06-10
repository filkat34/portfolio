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
      description: 'Application bureau windows de ressources humaines (POO, MVC, Winforms, authentification) codée\
      dans le cadre des "ateliers de professionalisation" de la préparation au BTS SIO (1e année).',
      techs: ['C#', 'Winforms', 'SQL'],
      repolink: 'https://github.com/filkat34/MediaTek86',

    },
    {
      title: 'TriBibli',
      description: 'Application de gestion de bibliothèque (POO, MVC, Winforms, sérialisation JSON).',
      techs: ['C#', 'Winforms'],
      repolink: 'https://github.com/filkat34/TriBibliv2'
    },
    {
      title: 'LitToolkit',
      description: 'Application Web comportant un ensemble d\'outils pour l\'enseignement des lettres.',
      techs: ['Angular', 'Bootstrap', 'TypeScript'],
      repolink: 'https://github.com/filkat34/LitToolkit',
    },
    {
      title: 'Portfolio',
      description: 'Mon portfolio d\'étudiant en développement.',
      techs: ['Angular', 'TypeScript', 'Tailwind'],
      repolink: 'https://github.com/filkat34/portfolio'
    },
    {
      title: 'Repartitor',
      description: 'Application de gestion permettant de constituer les services d\'une équipe d\'enseignement.',
      techs: ['Angular', 'TypeScript', 'Tailwind', 'IndexedDB'],
      repolink: 'https://github.com/filkat34/repartitor-ng'
    }
  ]

  // Trie la liste des projets dès l'initialisation
  sortedProjects = this.projects.slice().sort((a, b) => a.title.localeCompare(b.title));

  searchTerm: string = '';
  filteredProjects = this.sortedProjects; // Utilise la liste triée dès le départ

  filterProjects(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProjects = this.sortedProjects.filter(project =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.techs.some(tech => tech.toLowerCase().includes(term))
    );
  }
}
