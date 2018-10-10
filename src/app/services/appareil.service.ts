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


}
