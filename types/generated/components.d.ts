import type { Schema, Attribute } from '@strapi/strapi';

export interface ServeyCheckUpBiMensuelPackStarteEx extends Schema.Component {
  collectionName: 'components_servey_check_up_bi_mensuel_pack_starte_exes';
  info: {
    displayName: 'CheckUpBiMensuelPackStarteEx';
  };
  attributes: {
    asTuFaisDesEcartsDansLes2Semaines: Attribute.Enumeration<['Oui', 'Non']> &
      Attribute.Required;
  };
}

export interface ServeyContactDetails extends Schema.Component {
  collectionName: 'components_personal_info_contact_details';
  info: {
    displayName: 'ContactDetails';
    icon: 'alien';
    description: '';
  };
  attributes: {
    age: Attribute.Integer & Attribute.Required;
    poidsActuel: Attribute.Decimal & Attribute.Required;
    sexe: Attribute.Enumeration<['Homme', 'Femme']> & Attribute.Required;
    taille: Attribute.Decimal & Attribute.Required;
    postalCode: Attribute.String & Attribute.Required;
    ville: Attribute.String & Attribute.Required;
    numeroDeTelephone: Attribute.String & Attribute.Required;
    activiteProfessionnelle: Attribute.String & Attribute.Required;
  };
}

export interface ServeyEatingHabits extends Schema.Component {
  collectionName: 'components_eating_eating_habits';
  info: {
    displayName: 'EatingHabits';
    icon: 'archive';
    description: '';
  };
  attributes: {
    grignotages: Attribute.Enumeration<['Oui', 'Non']> & Attribute.Required;
    hydratation: Attribute.Enumeration<
      [
        'une Litre / jour',
        'deux Litres / jour',
        'trois Litres / jour',
        'plus trois Litres / jour'
      ]
    > &
      Attribute.Required;
    fastFood: Attribute.Enumeration<
      ['Jamais', 'De temps en temps', 'Souvent']
    > &
      Attribute.Required;
    alcool: Attribute.Enumeration<['Jamais', 'De temps en temps', 'Souvent']> &
      Attribute.Required;
  };
}

export interface ServeyFichePackSpecifiqueNutritIion extends Schema.Component {
  collectionName: 'components_servey_fiche_pack_specifique_nutrit_iions';
  info: {
    displayName: ' FichePackSpecifiqueNutritIion';
    description: '';
  };
  attributes: {
    objectifsPhysiquesEtMental: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'objectifsPhysiquesEtMental'>;
    commentTeSensTuActuellementPsychologiquement: Attribute.Text &
      Attribute.DefaultTo<'commentTeSensTuActuellementPsychologiquement'>;
    commentTeSensTuDansTaViePersonnelleEtProfessionnelle: Attribute.Text;
    asTuDesApprehensionsOuCraintesConcernantCeCoaching: Attribute.Text;
    pourquoiSouhaitesTuTravaillerAvecMoi: Attribute.Text;
    quAttendsTuDeCeCoaching: Attribute.Text;
    quEstCeQuiTeMotiveLePlus: Attribute.Text;
    quEstCeQuiTeDeCourageLePlus: Attribute.Text;
    asTuDeJaSouffertOuSouffresTuDeTcaTelsQuAnorexieBoulimieOuHyperphagie: Attribute.Text;
    connaisTuTesApportsActuelsEnMacronutrimentsSiOuiQuelsSontIls: Attribute.Text;
    asTuDeJaSuiviUnOuDesReGimesSpeCifiquesSiOuiLeOuLesquelsQuandEtPendantCombienDeTemps: Attribute.Text;
    horaireDeRepasEnviron: Attribute.String & Attribute.Required;
    nombreDEntrainementQueTuPeuxRealiserSemaine: Attribute.Enumeration<
      [
        'une s\u00E9ance',
        'deux s\u00E9ances',
        'trois s\u00E9ances',
        'quatre s\u00E9ances',
        'cinq s\u00E9ances'
      ]
    > &
      Attribute.Required;
    exprimeTaRoutineTesBesoins: Attribute.Text & Attribute.Required;
    siouiQuandgrignotestuetquelsaliments: Attribute.Text;
  };
}

export interface ServeyFichePackStarter extends Schema.Component {
  collectionName: 'components_servey_fiche_pack_starters';
  info: {
    displayName: 'FichePackStarter';
  };
  attributes: {
    objectifsMusculairesPhysique: Attribute.Text & Attribute.Required;
    horaireDeRepasEnviron: Attribute.String & Attribute.Required;
  };
}

export interface ServeyFichePackVipPremium extends Schema.Component {
  collectionName: 'components_servey_fiche_pack_vip_premiums';
  info: {
    displayName: 'FichePackVipPremium';
  };
  attributes: {
    objectifsPhysiqueMental: Attribute.Text & Attribute.Required;
    horaireDeRepasEnviron: Attribute.String & Attribute.Required;
  };
}

export interface ServeyGym extends Schema.Component {
  collectionName: 'components_servey_gyms';
  info: {
    displayName: 'Gym';
    icon: 'arrowLeft';
  };
  attributes: {
    quelleSalleDeSportVasTu: Attribute.String;
    siTuNasPasDeSalleMaterielsADisposition: Attribute.String;
    nombreDeSeanceSemaine: Attribute.String;
  };
}

export interface ServeyMealIntake extends Schema.Component {
  collectionName: 'components_servey_meal_intakes';
  info: {
    displayName: 'MealIntake';
    icon: 'alien';
  };
  attributes: {
    nombreDeRepasJour: Attribute.String & Attribute.Required;
    prendstuDesComplementsAlimentaires: Attribute.String & Attribute.Required;
  };
}

export interface ServeyMeasurements extends Schema.Component {
  collectionName: 'components_servey_measurements';
  info: {
    displayName: 'Measurements';
    icon: 'clock';
    description: '';
  };
  attributes: {
    molletsD: Attribute.Decimal & Attribute.Required;
    cuissesD: Attribute.Decimal & Attribute.Required;
    fessiers: Attribute.Decimal & Attribute.Required;
    taille: Attribute.Decimal & Attribute.Required;
    nombril: Attribute.Decimal & Attribute.Required;
    pectorauxPoitrine: Attribute.Decimal & Attribute.Required;
    epaules: Attribute.Decimal & Attribute.Required;
    brasD: Attribute.Decimal;
    photoDeFace: Attribute.String & Attribute.Required;
    photoDeProfil: Attribute.String & Attribute.Required;
    photoDeDos: Attribute.String & Attribute.Required;
    molletsG: Attribute.Decimal & Attribute.Required;
    cuissesG: Attribute.Decimal & Attribute.Required;
    brasG: Attribute.Decimal & Attribute.Required;
  };
}

export interface ServeyMedicalBackground extends Schema.Component {
  collectionName: 'components_medical_medical_backgrounds';
  info: {
    displayName: 'MedicalBackground';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Allergies: Attribute.Enumeration<['Oui', 'Non']> & Attribute.Required;
    siOuiLesquels: Attribute.Text;
    ashme: Attribute.Enumeration<['Oui', 'Non']> & Attribute.Required;
    allergiesAlimentaires: Attribute.Enumeration<['Oui', 'Non']> &
      Attribute.Required;
    siOuiLesquelles: Attribute.Text;
    problemesArticulaires: Attribute.Text;
    problemesDigestifs: Attribute.Text;
    problemesMusculaires: Attribute.Text;
    anciennesOperations: Attribute.Text;
    autres: Attribute.Text;
  };
}

export interface ServeyPackTrainingAthlete extends Schema.Component {
  collectionName: 'components_servey_pack_training_athletes';
  info: {
    displayName: 'PackTrainingAthlete';
  };
  attributes: {
    disciplineSportive: Attribute.String & Attribute.Required;
    tesObjectifsAthletiques: Attribute.Text & Attribute.Required;
    tesObjectifsPhysiques: Attribute.Text & Attribute.Required;
    quelPosteTuOccupes: Attribute.String & Attribute.Required;
    raconteMoiTonParcoursEnQuelquesLignes: Attribute.Text & Attribute.Required;
  };
}

export interface ServeyPersonal extends Schema.Component {
  collectionName: 'components_servey_personals';
  info: {
    displayName: 'Personal';
    icon: 'bold';
  };
  attributes: {
    nom: Attribute.String & Attribute.Required;
    prenom: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required & Attribute.Unique;
  };
}

export interface ServeyRevChk extends Schema.Component {
  collectionName: 'components_servey_rev_chks';
  info: {
    displayName: 'revChk';
    icon: 'search';
    description: '';
  };
  attributes: {
    siOuiQuelEcartAsTuFais: Attribute.String;
    arrivesTuAMangerToutesLesQuantites: Attribute.Enumeration<['Oui', 'Non']> &
      Attribute.Required;
    siNonAQuelMomentDeLaJourneeAsTuDuMalAToutManger: Attribute.String;
    ressensTuLaFaim: Attribute.Enumeration<['Oui', 'Non']> & Attribute.Required;
    siOuiAQuelMomentDeLaJourneeAsTuFaim: Attribute.String;
    asTuDesProblemesDeDigestion: Attribute.Enumeration<
      ['Oui, Ballonements', 'Non']
    >;
    vasTuAuxToilettesRegulierement: Attribute.Enumeration<
      ['Oui Tous les jours', 'Non 1 jour sur 2', 'Non Rarement']
    >;
    asTuPuFaireLEnsembleDesSeances: Attribute.Enumeration<['Oui', 'Non']> &
      Attribute.Required;
    asTuDeBonnesSensationsDurantTesTrainings: Attribute.Enumeration<
      [
        'Pas de sensations',
        'Bonnes sensations',
        'De bonnes courbatures',
        'De fortes courbatures'
      ]
    > &
      Attribute.Required;
    ressensTuDeLaFatigue: Attribute.Enumeration<
      [
        'Pas du tout',
        'Juste apr\u00E8s ma s\u00E9ance',
        'Des coups de fatigues occasionnellement',
        'Fatigue journali\u00E8re / Difficult\u00E9 \u00E0 r\u00E9cup\u00E9rer'
      ]
    > &
      Attribute.Required;
    tesChargesDExercicesAugmententElles: Attribute.Enumeration<
      ['Oui', 'Non', "Non mais j'ai une meilleur technique sur mes exercices"]
    > &
      Attribute.Required;
    tesMenstruationsArriventEllesLaSemaineProchaine: Attribute.Enumeration<
      [
        'Je pense que oui',
        'Non',
        'D\u00E9r\u00E8glement hormonal de + 1 semaine'
      ]
    > &
      Attribute.Required;
    taQualiteDuSommeil: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 10;
        },
        number
      >;
    combienDHeuresDeSommeilDorsTu: Attribute.Enumeration<
      ['- de 5h / nuit', 'Entre 5h-7h / nuit', '+ de 7h / nuit']
    > &
      Attribute.Required;
    combienDeLitresDEauJour: Attribute.Enumeration<
      [
        'une Litre / jour',
        'deux Litres / jour',
        'trois Litres / jour',
        'plus quatre Litres / jour'
      ]
    > &
      Attribute.Required;
    resumeTesSensationsDeLaSemaineDUnPointDeVuePhysiquePsychologique: Attribute.Text &
      Attribute.Required;
    PoidsAJeun: Attribute.Float & Attribute.Required;
  };
}

export interface ServeySleep extends Schema.Component {
  collectionName: 'components_servey_sleeps';
  info: {
    displayName: 'sleep';
    icon: 'code';
  };
  attributes: {
    asTuFaisDesEcartsDansLaSemaine: Attribute.Enumeration<['Oui', 'Non']> &
      Attribute.Required;
  };
}

export interface ServeySportsPracticed extends Schema.Component {
  collectionName: 'components_servey_sports_practiceds';
  info: {
    displayName: 'SportsPracticed';
    icon: 'collapse';
  };
  attributes: {
    siOuiQuelSport: Attribute.String;
    nombreDheureParSemaine: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'servey.check-up-bi-mensuel-pack-starte-ex': ServeyCheckUpBiMensuelPackStarteEx;
      'servey.contact-details': ServeyContactDetails;
      'servey.eating-habits': ServeyEatingHabits;
      'servey.fiche-pack-specifique-nutrit-iion': ServeyFichePackSpecifiqueNutritIion;
      'servey.fiche-pack-starter': ServeyFichePackStarter;
      'servey.fiche-pack-vip-premium': ServeyFichePackVipPremium;
      'servey.gym': ServeyGym;
      'servey.meal-intake': ServeyMealIntake;
      'servey.measurements': ServeyMeasurements;
      'servey.medical-background': ServeyMedicalBackground;
      'servey.pack-training-athlete': ServeyPackTrainingAthlete;
      'servey.personal': ServeyPersonal;
      'servey.rev-chk': ServeyRevChk;
      'servey.sleep': ServeySleep;
      'servey.sports-practiced': ServeySportsPracticed;
    }
  }
}
