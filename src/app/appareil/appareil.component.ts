import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }

  ngOnInit() {
  }

  public getStatus() {
    return this.appareilStatus;
  }

  public getColor(): string {
    if (this.appareilStatus === "allumé") return 'green';
    else return 'red';
  }

}
