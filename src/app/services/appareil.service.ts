import { Subject } from 'rxjs';

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  public appareils = [
    {
      id: 1,
      name: "Machine à laver",
      status: 'éteint'
    },
    {
      id: 2,
      name: "Frigo",
      status: 'allumé'
    },
    {
      id: 3,
      name: "Ordinateur",
      status: 'éteint'
    },
  ]

  public switchOnAll() {
    for (let a of this.appareils) {
      a.status = 'allumé'
    }
  }

  public emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  public switchOffAll() {
    for (let a of this.appareils) {
      a.status = 'éteint'
    }
  }

  public switchOnOne(i: number) {
    this.appareils[i].status = 'allumé'
  }

  public switchOffOne(i: number) {
    this.appareils[i].status = 'éteint'
  }

  public getAppareilById(id: number): any {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id
      }
    );
    return appareil;
  }

  public addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }


}
