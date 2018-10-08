import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'working-with-branches';
  public isAuth = false;

  public appareilOne ="Machine à laver";
  public appareilTwo="Frigo";
  public appareilTree="Ordinateur";

  constructor(){

    // tempo simulation auth api
    setTimeout(
      ()=>{
        this.isAuth=true;
      },4000
    )

  }

  public onAllumer(){

  }

}
