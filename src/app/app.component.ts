import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Working with branches';
  public isAuth = false;

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

  constructor() {

    // tempo simulation auth api
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )

  }

  public onAllumer() {

  }

}
