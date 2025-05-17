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
    `Étudiant en informatique, docteur et professeur de lettres, j'aime apprendre, résoudre
  des problèmes et travailler en équipe.`,
    `J'ai une formation en programmation, sciences cognitives, pédagogie,
  traduction et littératures comparées.`,
    `En reconversion professionnelle vers le métier de développeur d'applications,
  je cherche à concilier mes centres d'intérêt en concevant des
  objets virtuels favorisant l'apprentissage, le traitement des textes, des langues et des données, à l'aide
  de langages informatiques plus abstraits.`
  ];

  /**
   * Pile technologique
   * @description Liste des technologies utilisées dans le projet
   */
  techs = [
    {
      title: 'Langages',
      texttechs: ['C#', 'Python', 'Java', 'TypeScript', 'HTML', 'CSS', 'PHP'],
    },
    {
      title: 'Frameworks',
      texttechs: ['Angular', 'Bootstrap', 'Tailwind'],
  
    },
    {
      title: 'IDE',
      texttechs: ['Visual Studio', 'VS Code', 'Eclipse', 'PyCharm'],
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
