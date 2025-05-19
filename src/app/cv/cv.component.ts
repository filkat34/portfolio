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
   * Variables de gestion des modales
   * @description
   */
  selectedFormation: any = null;
  selectedExperience: any = null;

  /**
   * Ouvre la modale de formation et désactive le défilement en arrière-plan
   * @param formation 
   */
  openFormationModal(formation: any) {
    this.selectedFormation = formation;
    document.body.classList.add('overflow-hidden');
    document.documentElement.classList.add('overflow-hidden');
  }

  /**
   * Ouvre la modale d'expérience et désactive le défilement en arrière-plan
   * @param experience 
   */
  openExperienceModal(experience: any) {
    this.selectedExperience = experience;
    document.body.classList.add('overflow-hidden');
    document.documentElement.classList.add('overflow-hidden'); // fo
  }

  /**
   * Ferme la modale et réactive le défilement
   * @returns {void}
   */
  closeModal() {
    this.selectedFormation = null;
    this.selectedExperience = null;
    document.body.classList.remove('overflow-hidden');
    document.documentElement.classList.remove('overflow-hidden');
  }

  /**
   * Regroupe les formations par date pour affichage
   * @description
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
      .sort((a, b) => parseInt(b[0]) - parseInt(a[0])) // Sort by year descending
      .map(([date, items]) => ({ date, items }));
  }

  /**
   * Regroupe les expériences par date pour affichage
   * @description
   * @returns {Array} - Un tableau d'objets contenant la date et les expériences associées
   */
  get experiencesByDate() {
    const groups: { [year: string]: any[] } = {};
    for (const experience of this.experiences) {
      const year = experience.datedeb.slice(0, 4); // Extract the year
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(experience);
    }
    return Object.entries(groups)
      .sort((a, b) => parseInt(b[0]) - parseInt(a[0])) // Sort by year descending
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
      description: `
  <p>La formation diplômante BTS Services Informatiques aux Organisations 
                (option&nbsp;: Solutions Logicielles et Applications Métiers) permet, en deux ans, 
                l’acquisition de connaissances théoriques et de compétences professionnelles indispensables 
                à la production et la fourniture de services informatiques.
            </p><br>
            <p>Au cœur de cette formation se trouve l’acquisition d’un ensemble de savoirs 
                spécifiques en informatique et notamment celle de compétences en vue d’assurer
                le support et la mise à disposition de services informatiques&nbsp;; la gestion de données&nbsp;; 
                la conception, le développement et la maintenance corrective ou évolutive d’applications&nbsp;;
                la cybersécurisation des solutions applicatives et de leur développement.
            </p><br>
            <p>
                Cette formation permet également l’acquisition de compétences générales nécessaires pour évoluer
                dans le monde de l’entreprise en dispensant un socle commun de connaissances en 
                expression-communication, langue anglaise, culture économique, juridique et managériale, 
                tout en offrant une première expérience professionnelle dans le cadre d’un stage de dix semaines.
            </p><br>
            <p>Je me suis engagé dans ce parcours de formation dans la perspective d’une 
                évolution professionnelle vers le métier de développeur d’applications. 
                Il s’agit d’un métier qui m’attire tant par sa dimension concrète 
                (sa finalité est la production d’un objet) qu’abstraite 
                (il s’agit de traduire un besoin en langage informatique) sans oublier son aspect collectif 
                (le travail d’équipe est essentiel). Une autre caractéristique du métier qui convient à 
                mon envie d'apprendre en permanence, c’est qu’il faut sans cesse remettre en question 
                ce que l’on sait déjà afin de mieux suivre le rythme très rapide des évolutions technologiques.
            </p>
`

    },
    {
      date: '2023',
      diplome: 'Diplôme Universitaire',
      mention: `Sciences cognitives pour l'éducation et la formation`,
      organisme: `UPEC`,
      description: `<p>Sujet : <i>Effets de la mémoire de travail, de l’inhibition cognitive et de l’attention soutenue sur les 
                        performances en lecture-compréhension en fin de cycle 3</i>.</p><br>
                        Cette étude s’inscrit dans une approche confirmatoire des résultats de la
recherche validés par des travaux récents comme ceux d’Arrington et al. (2014) : ceux-ci ont notamment montré l’existence de fortes
corrélations entre d’une part la mémoire de travail, l’inhibition cognitive et l’attention soutenue, et,
d’autre part, les performances en lecture-compréhension. Notre objectif a donc été de mesurer les
effets de ces trois habiletés cognitives générales sur la compréhension écrite et ainsi de confirmer
ou infirmer l’existence de ces corrélations.`
    },
    {
      date: '2018',
      diplome: 'Doctorat',
      mention: `Littératures comparées`,
      organisme: `Université Paul Valéry`,
      description: `<p>Sujet : <i>La fiction mystériographique : émergence et 
                        dissémination d'une poétique en France, en Grèce et en Grande-Bretagne au XIX<sup>e</sup> siècle.</i></p><br>
                        Suite au succès commercial des Mystères de Paris (1842-1843) d’Eugène Sue, les marchés littéraires de nombreux
                         pays ont été saturés par un nombre incalculable d’ouvrages qui proposaient d’infinies variations sur le titre
                          du romancier français. À partir d’une étude approfondie de la réception du célèbre roman de Sue et de toute
                           la « littérature des mystères » dont il a été à l’origine en France, en Grèce et en Grande-Bretagne,
                            cette thèse s’interroge sur la place qu’il convient d’accorder, dans l’histoire culturelle,
                             à cette « mystériographie » compulsive qui promettait aux lecteurs de leur révéler les secrets
                              non seulement du monde contemporain, mais aussi de l’histoire, de la science, de la politique etc. 
                              Tout en questionnant les conclusions d’une critique prolifique sur le phénomène qui en fait un genre 
                              spécifique du domaine romanesque paralittéraire, cette thèse plaide pour une approche plus globale. 
                              Pur produit d’une culture médiatique vouée à la représentation du monde, la « mystériographie » se 
                              présente comme le creuset d’un nouvel imaginaire de la lecture appelé à devenir dominant avec l’entrée 
                              progressive des pays européens, à partir des années 1860, dans la culture de masse : mêlant ancrage dans 
                              le réel et sensationnalisme outrancier, la « fiction mystériographique » semblait déjà cristalliser les 
                              poétiques qui se situaient au cœur des lectures du plus grand nombre.</p>
                              <p><br>
                              <p>Cette thèse a été publiée aux Presses Universitaires de Limoges sous le titre :
                    <i>La Littérature des mystères. Poétique historique d'un succès médiatique du XIX<sup>e</sup> siècle en France, 
                    en Grèce et en Grande-Bretagne</i>, Médiatextes, Presses Universitaires de Limoges, 2020.</p>
                        `
    },
    {
      date: '2013',
      diplome: 'Master 2',
      mention: `Enseignement`,
      organisme: `ENS de Lyon`,
      description: `Master professionnel dans le cadre de la préparation aux concours de l'enseignement public CAPES/Agrégation. `
    },
    {
      date: '2010',
      diplome: 'Master 2',
      mention: `Littérature comparée et francophonie`,
      organisme: `ENS de Lyon`,
      description: `<p>Sujet : <i>Le roman des mystères grec au XIX<sup>e</sup> siècle.</i></p>`
    },
    {
      date: '2009',
      diplome: 'Master 1',
      mention: `Etudes européennes et traduction`,
      organisme: `INALCO`,
      description: `<p>Sujet : Traductions commentées et annotées de trois nouvelles du recueil <i>Υποφωτισμένο</i> de N. Hadjidimitriou.</p>`
    },
    {
      date: '2008',
      diplome: 'Licence',
      mention: `Lettres modernes`,
      organisme: `Lycée Louis-Le-Grand`,
      description: `Classes préparatoires littéraires A/L et obtention par équivalence d'une licence de lettres modernes (Paris IV).`
    },
    {
      date: '2024',
      diplome: 'Certification',
      mention: `Python`,
      organisme: `OpenEDG Python Institute`,
      description: `
      <p>PCEP : Certified Entry-Level Python Programmer certification is a professional 
      credential that measures the ability to accomplish coding tasks related to the essentials 
      of programming in the Python language.</p> <br>
      <p>A test candidate should demonstrate sufficient knowledge of the universal concepts of computer programming, 
      the syntax and semantics of the Python language as well as the skills in resolving typical implementation 
      challenges with the help of the Python Standard Library.</p><br>
      <p>PCEP : Certified Entry-Level Python Programmer certification shows that the individual is familiar with 
      universal computer programming concepts like data types, containers, functions, conditions, loops, exceptions, 
      as well as Python programming language syntax, semantics, and the runtime environment.</p>
      `,
      link: { text: 'Lien vers le certificat PCPE', url: 'https://verify.openedg.org/?id=U9Ox.83aO.A5sc' },
    },
    {
      date: '2024',
      diplome: 'Certification',
      mention: `C#`,
      organisme: `Free Code Camp & Microsoft`,
      description: `<p>The Foundational C# Certification from Microsoft is designed for individuals 
      seeking to develop a strong understanding of C# programming. This certification provides essential 
      skills in coding, debugging, and application development, making it an excellent starting point for aspiring developers.</p><br>
      <p>Through comprehensive lessons, learners will explore key concepts such as variables, data types, loops, and conditional 
      statements. Additionally, the course covers the creation of methods, the implementation of logic, and fundamental 
      debugging techniques to ensure efficient program execution.</p><br>
      <p>By completing this certification, candidates gain valuable hands-on experience with C#, preparing them for 
      further exploration in software development.<p><br>`,
      link: { text: 'Lien vers le certificat Foundational C# with Microsoft', url: 'https://www.freecodecamp.org/certification/filipposK/foundational-c-sharp-with-microsoft' }
    },
    {
      date: '2004',
      diplome: 'Certification',
      mention: `Langue anglaise`,
      organisme: `University of Cambridge`,
      description: `Obtenion de la certificatuon "Cambridge English Proficiency (C2)" correspondant au niveau C2 sur l'échelle du CECR.`,
    },
    {
      date: '2004',
      diplome: 'Certification',
      mention: `Langue grecque moderne`,
      organisme: `Center for the Greek Language`,
      description: `Obtention de "CGL Certification of Attainment in Greek" correspondant au niveau C2 sur l'échelle du CECR.`,
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
      poste: 'Allocataire moniteur de recherche',
      employeur: 'Université Paul Valéry',
      datedeb: '2013-09',
      datefin: '2016-09',
      description: `Dans le cadre d\'un contrat doctoral : travaux dirigés et cours magistraux de littérature générale et comparée, et d\'expression-communication en licence. 
      La majorité de mes travaux de recherche sont disponibles en ligne en accès ouvert.`
    }
  ]
}
