import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

  ngOnInit(): void {
    // Trier les formations par date (du plus récent au plus vieux)
    this.formations.sort((a, b) => parseInt(b.date) - parseInt(a.date));

    // Trier les expériences par date (du plus récent au plus vieux)
    this.experiences.sort((a, b) => parseInt(b.date) - parseInt(a.date));
  }

  /**
  * @description
  * Affiche les formations suivies
  * @param {string} annee - L'année de la formation
  * @param {string} diplome - Le diplôme obtenu
  * @param {string} description - La description de la formation
  * @param {string} description2 - La deuxième description de la formation
  * @param {string} description3 - La troisième description de la formation
  * @param {string} links - Les liens vers les certifications
  * @param {string} url - L'URL de la certification
  * @param {string} text - Le texte de la certification
  * @returns {void}
  */
  formations = [
    {
      date: '2024-',
      diplome: 'Brevet de Technicien Supérieur',
      organisme: 'CNED',
      description: `Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers (BTS SIO SLAM). Compétences en cours d'acquisition : mise à 
                disposition de services informatiques, gestion de données, conception, développement et la maintenance corrective ou évolutive d'applications ; 
                cybersécurisation des solutions applicatives et de leur développement.`,
    },
    {
      date: '2023',
      diplome: 'Diplôme Universitaire',
      organisme: `UPEC`,
      description: `Mention "Sciences cognitives pour l'éducation et la formation" à l'Université Paris-Est Créteil.`
    },
    {
      date: '2018',
      diplome: 'Doctorat',
      organisme: `Université Paul Valéry`,
      description: `Thèse en littératures comparées en cotutelle avec l'Université de Patras.`
    },
    {
      date: '2013',
      diplome: 'Master 2',
      organisme: `ENS de Lyon`,
      description: `Professionnel mention "Enseignement (collège, lycée, premier cycle universitaire)". `
    },
    {
      date: '2010',
      diplome: 'Master 2',
      organisme: `ENS de Lyon`,
      description: `Recherche mention "Littérature comparée et francophonie".`
    },
    {
      date: '2009',
      diplome: 'Master 1',
      organisme: `INALCO`,
      description: `"Etudes européennes", mention "Traduction".`
    },
    {
      date: '2008',
      diplome: 'Licence',
      organisme: `Lycée Louis-Le-Grand`,
      description: `Classes préparatoires littéraires et obtention par équivalence d'une licence de lettres modernes (Paris IV).`
    },
    {
      date: '2024',
      diplome: 'Certification',
      organisme: `OpenEDG Python Institute`,
      description: ``,
      link: { text: 'Certified Entry-Level Python Programmer', url: 'https://verify.openedg.org/?id=U9Ox.83aO.A5sc' },
    },
    {
      date: '2024',
      diplome: 'Certification',
      organisme: `Free Code Camp & Microsoft`,
      description: ``,
      link: { text: 'Foundational C# with Microsoft', url: 'https://www.freecodecamp.org/certification/filipposK/foundational-c-sharp-with-microsoft' }
    },
    {
      date: '2004',
      diplome: 'Certification',
      organisme: `University of Cambridge`,
      description: `Cambridge English Proficiency (C2)`,
    },
    {
      date: '2004',
      diplome: 'Certification',
      organisme: `Center for the Greek Language`,
      description: `CGL Certification of Attainment in Greek (C2)`,
    },
  ];

  visibleDescriptionIndex: number | null = 0; // Index de la description visible

  toggleFormation(index: number): void {
    // Si l'index est déjà visible, on le masque, sinon on l'affiche
    this.visibleDescriptionIndex = this.visibleDescriptionIndex === index ? null : index;
  }

  /**
   * @description
   * Affiche les expériences professionnelles
   * @param {string} titre - Le titre du poste
   * @param {string} annee - L'année de l'expérience
   * @param {string} detail - Les détails de l'expérience
   */
  experiences = [
    {
      poste: 'Professeur agrégé de lettres modernes',
      employeur: 'Education nationale',
      date: '2016-',
      description: 'Professeur de lettres modernes en collège et lycée. Professeur principal. Coordonnateur d\'équipe.\
      Pilotage de dispositifs de remédiation. Concepteur et rédacteur freelance d\'éditions scolaires pour la collection "Etonnants classiques" (Flammarion).'
    },
    {
      poste: 'Enseignant-chercheur',
      employeur: 'Université Paul Valéry',
      date: '2013-2016',
      description: 'Allocataire moniteur de recherche. Travaux dirigés et cours magistraux de littérature et d\'expression-communication en licence. Un cetain nombre de mes travaux de recherche sont disponibles en ligne en accès ouvert ; mes travaux de thèse ont été publiés aux Presses Universitaires de Limoges sous le titre "La Littérature des mystères : poétique historique d\'un succès médiatique du XIXe siècle".'
    }
  ]

  visibleExperienceIndex: number | null = 0; // Pour Expérience
  
  toggleExperience(index: number): void {
    this.visibleExperienceIndex = this.visibleExperienceIndex === index ? null : index;
  }

}
