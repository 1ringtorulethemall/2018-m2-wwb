import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service'
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  public lastUpdate: any;
  public appareils: any[];
  public isAuth : boolean = false;

  constructor(private appareilService: AppareilService, private authService : AuthService) {

    /*// tempo simulation auth api
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )*/

    this.isAuth=this.authService.isAuth;

    this.lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date)
      }, 2000)
    })

  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  public onAllumer() {
    this.appareilService.switchOnAll();
  }

  public onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?'))
      this.appareilService.switchOffAll();
  }

}
