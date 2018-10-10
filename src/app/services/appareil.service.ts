export class AppareilService {

  public appareils = [
    {
      name: "Machine à laver",
      status: 'éteint'
    },
    {
      name: "Frigo",
      status: 'allumé'
    },
    {
      name: "Ordinateur",
      status: 'éteint'
    },
  ]

  public switchOnAll() {
    for (let a of this.appareils) {
      a.status = 'allumé'
    }
  }

  public switchOffAll() {
    for (let a of this.appareils) {
      a.status = 'éteint'
    }
  }

  public switchOnOne(i : number){
    this.appareils[i].status='allumé'
  }

  public switchOffOne(i : number){
    this.appareils[i].status='éteint'
  }


}
