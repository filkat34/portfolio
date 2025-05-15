import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

  /**
   * Initialisations
   * Tri des formations et expériences par date
   * @returns {void}
   */
  ngOnInit(): void {
    this.formations.sort((a, b) => parseInt(b.date) - parseInt(a.date));
    this.experiences.sort((a, b) => parseInt(b.datedeb) - parseInt(a.datedeb));
  }

  /**
   * Variables de gestion des modales
   * @description
   */
  selectedFormation: any = null;
  selectedExperience: any = null;

  /**
   * Ouvre la modale de formation
   * @param formation 
   */
  openFormationModal(formation: any) {
    this.selectedFormation = formation;
  }

  /**
   * Ouvre la modale d'expérience
   * @param experience 
   */
  openExperienceModal(experience: any) {
    this.selectedExperience = experience;
  }

  /**
   * Ferme la modale
   * @returns {void}
   */
  closeModal() {
    this.selectedFormation = null;
    this.selectedExperience = null;
  }

  /**
   * @description
   * Regroupe les formations par date pour affichage
   * @returns {Array} - Un tableau d'objets contenant la date et les formations associées
   */
  get formationsByDate() {
    const groups: { [date: string]: any[] } = {};
    for (const formation of this.formations) {
      if (!groups[formation.date]) {
        groups[formation.date] = [];
      }
      groups[formation.date].push(formation);
    }
    return Object.entries(groups)
      .sort((a, b) => {
        // Handle possible non-numeric dates like '2016-'
        const aNum = parseInt(a[0]);
        const bNum = parseInt(b[0]);
        if (isNaN(aNum) && isNaN(bNum)) return 0;
        if (isNaN(aNum)) return 1;
        if (isNaN(bNum)) return -1;
        return bNum - aNum;
      })
      .map(([date, items]) => ({ date, items }));
  }

  /**
   * Récupère la date actuelle
   * @returns {string} - La date actuelle au format YYYY-MM
   */
  getDateActuelle(): string {
    const date = new Date();
    const annee = date.getFullYear();
    const mois = date.getMonth() + 1; // Les mois commencent à 0
    const currentDateISO = date.toISOString().slice(0, 10);
    return `${annee}-${mois < 10 ? '0' : ''}${mois}`;
  }

  /**
   * Calcule la durée d'expérience entre deux dates
   * @param datedeb 
   * @param datefin 
   * @returns 
   */
  getExperienceDuration(datedeb: string, datefin: string): string {
    if (!datedeb || !datefin) return '';
    const [startYear, startMonth] = datedeb.split('-').map(Number);
    const [endYear, endMonth] = datefin.split('-').map(Number);

    let years = endYear - startYear;
    let months = endMonth - startMonth;

    if (months < 0) {
      years--;
      months += 12;
    }

    let result = '';
    if (years > 0) result += `${years} an${years > 1 ? 's' : ''}`;
    if (years > 0 && months > 0) result += ' ';
    if (months > 0) result += `${months} mois`;
    return result;
  }

  /**
  * @description
  * Affiche les formations
  * @param {string} date - La date de la formation
  * @param {string} diplome - Le diplôme obtenu
  * @param {string} mention - La mention du diplôme
  * @param {string} organisme - L'organisme de formation
  * @param {string} description - La description de la formation
  * @param {string} link - Le lien vers la certification
  * @param {string} link.text - Le texte du lien
  * @param {string} link.url - L'URL du lien
  */
  formations = [
    {
      date: '2024',
      diplome: 'Brevet de Technicien Supérieur',
      mention: 'Solutions Logicielles et Applications Métiers',
      organisme: 'CNED',
      description: `Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers (BTS SIO SLAM). Compétences en cours d'acquisition : mise à 
                disposition de services informatiques, gestion de données, conception, développement et la maintenance corrective ou évolutive d'applications ; 
                cybersécurisation des solutions applicatives et de leur développement.`,
    },
    {
      date: '2023',
      diplome: 'Diplôme Universitaire',
      mention: `Sciences cognitives pour l'éducation et la formation`,
      organisme: `UPEC`,
      description: `Mention "Sciences cognitives pour l'éducation et la formation" à l'Université Paris-Est Créteil.`
    },
    {
      date: '2018',
      diplome: 'Doctorat',
      mention: `Littératures comparées`,
      organisme: `Université Paul Valéry`,
      description: `Thèse en littératures comparées en cotutelle avec l'Université de Patras.`
    },
    {
      date: '2013',
      diplome: 'Master 2',
      mention: `Enseignement (collège, lycée, premier cycle universitaire)`,
      organisme: `ENS de Lyon`,
      description: `Professionnel mention "Enseignement (collège, lycée, premier cycle universitaire)". `
    },
    {
      date: '2010',
      diplome: 'Master 2',
      mention: `Littérature comparée et francophonie`,
      organisme: `ENS de Lyon`,
      description: `Recherche mention "Littérature comparée et francophonie".`
    },
    {
      date: '2009',
      diplome: 'Master 1',
      mention: `Etudes européennes et traduction`,
      organisme: `INALCO`,
      description: `"Etudes européennes", mention "Traduction".`
    },
    {
      date: '2008',
      diplome: 'Licence',
      mention: `Lettres modernes`,
      organisme: `Lycée Louis-Le-Grand`,
      description: `Classes préparatoires littéraires et obtention par équivalence d'une licence de lettres modernes (Paris IV).`
    },
    {
      date: '2024',
      diplome: 'Certification',
      mention: `Python`,
      organisme: `OpenEDG Python Institute`,
      description: ``,
      link: { text: 'Certified Entry-Level Python Programmer', url: 'https://verify.openedg.org/?id=U9Ox.83aO.A5sc' },
    },
    {
      date: '2024',
      diplome: 'Certification',
      mention: `C#`,
      organisme: `Free Code Camp & Microsoft`,
      description: ``,
      link: { text: 'Foundational C# with Microsoft', url: 'https://www.freecodecamp.org/certification/filipposK/foundational-c-sharp-with-microsoft' }
    },
    {
      date: '2004',
      diplome: 'Certification',
      mention: `Langue vivante : Anglais`,
      organisme: `University of Cambridge`,
      description: `Cambridge English Proficiency (C2)`,
    },
    {
      date: '2004',
      diplome: 'Certification',
      mention: `Langue vivante : Grec Moderne`,
      organisme: `Center for the Greek Language`,
      description: `CGL Certification of Attainment in Greek (C2)`,
    },
  ];

  /**
   * @description
   * Affiche les expériences professionnelles
   * @param {string} poste - Le poste occupé
   * @param {string} employeur - L'employeur
   * @param {string} datedeb - La date de début
   * @param {string} datefin - La date de fin
   * @param {string} description - La description de l'expérience
   * 
   */
  experiences = [
    {
      poste: 'Professeur agrégé de lettres modernes',
      employeur: 'Education nationale',
      datedeb: '2016-09',
      datefin: 'présent',
      description: 'Professeur de lettres modernes en collège et lycée. Professeur principal. Coordonnateur d\'équipe.\
      Pilotage de dispositifs de remédiation. Concepteur et rédacteur freelance d\'éditions scolaires pour la collection "Etonnants classiques" (Flammarion).'
    },
    {
      poste: 'Enseignant-chercheur',
      employeur: 'Université Paul Valéry',
      datedeb: '2013-09',
      datefin: '2016-09',
      description: 'Allocataire moniteur de recherche. Travaux dirigés et cours magistraux de littérature et d\'expression-communication en licence. Un cetain nombre de mes travaux de recherche sont disponibles en ligne en accès ouvert ; mes travaux de thèse ont été publiés aux Presses Universitaires de Limoges sous le titre "La Littérature des mystères : poétique historique d\'un succès médiatique du XIXe siècle".'
    }
  ]
}
