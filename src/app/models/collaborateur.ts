export class Collaborateur {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: string;
    role: any;
    email: string;
    mdp: string;


  constructor() {
    this.id = 0;
    this.nom = null;
    this.prenom = null;
    this.dateNaissance = null;
    this.role = null;
    this.email = null;
    this.mdp = null;
  }
}
