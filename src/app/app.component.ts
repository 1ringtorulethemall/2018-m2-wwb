import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title : string = 'Working with branches';
  public isAuth : boolean = false;

  public lastUpdate : any;
  public appareils : any[];
  constructor(private appareilService: AppareilService) {

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

  ngOnInit() {
    this.appareils= this.appareilService.appareils;
  }

  public onAllumer() {
      this.appareilService.switchOnAll();
  }

  public onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?'))
      this.appareilService.switchOffAll();
  }

}
