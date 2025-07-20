import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  /**
   * Variables de la classe HomeComponent
   */
  showContent = false; // Variable pour contrôler la visibilité de l'accueil
  isHovering = false; // Variable pour contrôler l'effet de survol de l'accueil

  /**
   * Texte de l'accueil
   * @description Texte d'accueil affiché sur la page d'accueil
   */
  aboutItems = [
    `🎓 Docteur en lettres et également diplômé en sciences cognitives et en traduction, je mets à profit mon parcours académique pour développer des outils numériques au service de l’éducation.`,
    `💻 Étudiant en informatique et spécialisé en développement web, je conçois des applications intuitives qui facilitent le quotidien des enseignants et des apprenants.`,
    `📚 Avec plus de dix ans d’expérience dans l’enseignement, allant du secondaire à l’université, j’ai développé une compréhension fine des défis pédagogiques et des besoins du terrain. Mes projets et collaborations actuels visent à répondre concrètement à ces défis grâce à des solutions web innovantes.`
  ];

  /**
   * Pile technologique
   * @description Liste des technologies utilisées dans le projet
   */
  techs = [
    {
      title: 'Langages',
      texttechs: ['C#', 'Python', 'Java', 'Javacript', 'HTML', 'CSS', 'PHP'],
    },
    {
      title: 'Frameworks',
      texttechs: ['Angular', 'React', 'NestJS'],

    },
    {
      title: 'IDE',
      texttechs: ['Visual Studio', 'VS Code', 'Eclipse', 'PyCharm', 'Webstorm'],
    },
    {
      title: 'SGBD',
      texttechs: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'CMS',
      texttechs: ['WordPress'],
    },
    {
      title: 'Collaboration',
      texttechs: ['GitHub'],
    },
  ];

}
