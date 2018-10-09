import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string = 'Working with branches';
  public isAuth : boolean = false;

  public lastUpdate : any;

  public appareilOne : string = "Machine à laver";
  public appareilTwo : string = "Frigo";
  public appareilTree : string = "Ordinateur";

  constructor() {

    // tempo simulation auth api
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )

    this.lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(()=>{
        resolve(date)
      },2000)
    })

  }

  public onAllumer() {

  }

}
