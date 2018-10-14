import { Component, OnInit, Input } from '@angular/core';

import { AppareilService } from '../services/appareil.service'

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id : number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  public getStatus() {
    return this.appareilStatus;
  }

  public getColor(): string {
    if (this.appareilStatus === "allumé") return 'green';
    else return 'red';
  }

  public onSwitch() {
    if (this.appareilStatus == "allumé") {
      this.appareilService.switchOffOne(this.index)
    }
    else if (this.appareilStatus == "éteint") {
      this.appareilService.switchOnOne(this.index)
    }
  }

}
