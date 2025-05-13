import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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

  techs = [
    {
      title: 'Langages',
      icons: ['./assets/technologies/cs.svg',
        './assets/technologies/python.svg',
        './assets/technologies/java.svg',
        './assets/technologies/ts.svg',
        './assets/technologies/html.svg',
        './assets/technologies/css.svg',
        './assets/technologies/php.svg',]
    },
    {
      title: 'Frameworks',
      icons: ['./assets/technologies/angular.svg',
        './assets/technologies/tailwind.svg',
        './assets/technologies/bootstrap.svg',
      ]
    },
    {
      title: 'IDE',
      icons: ['./assets/technologies/vscode.svg',
        './assets/technologies/visualstudio.svg',
        './assets/technologies/eclipse.svg',
        './assets/technologies/pycharm.svg',]
    },
    {
      title: 'SGBD',
      icons: ['./assets/technologies/mysql.svg',
        './assets/technologies/postgresql.svg',
        './assets/technologies/mongodb.svg',
      ]
    },
    {
      title: 'CMS',
      icons: ['./assets/technologies/wordpress.svg',]
    },
    {
      title: 'Collaboration',
      icons: ['./assets/technologies/github.svg']
    }, 
  ];

}
