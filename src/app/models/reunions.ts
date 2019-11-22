export class Reunions {
  private id: number;
  private libelle: string;
  private objectif: string;
  private date: string;
  private lieu: string;
  private compteRendu: string;
  private participants: Array<any>;
  private referant: any;
  private taches: Array<any>;


  constructor() {
    this.id = 0;
    this.libelle = null;
    this.objectif = null;
    this.date = null;
    this.lieu = null;
    this.compteRendu = null;
    this.participants = null;
    this.referant = null;
    this.taches = null;
  }
}
