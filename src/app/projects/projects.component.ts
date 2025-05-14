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
      techs: ['Angular', 'Bootstrap', 'TypeScript', 'HTML', 'CSS'],
      repolink: 'https://github.com/filkat34/LitToolkit',
    },
    {
      title : 'Portfolio',
      description : 'Mon portfolio d\'étudiant en développement.',
      techs: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
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
      project.techs.some(tech => tech.toLowerCase().includes(term))
    );
  }
}
