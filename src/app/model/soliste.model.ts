export class Soliste {

    num:number;
    nom:string;
    prenom:string;
    dateNaissance:Date;
    nationalite:string;

    constructor(num:number, nom:string, prenom:string, dateNaissance:Date, nationalite:string)
    {
        this.num=num;
        this.nom=nom;
        this.prenom=prenom;
        this.dateNaissance=dateNaissance;
        this.nationalite=nationalite;
    }
}
