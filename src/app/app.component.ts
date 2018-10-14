import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'Working with branches';

  public secondes: number;
  private counterSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('erreur suivante:' + error)
      },
      () => {
        console.log('Observable complete')
      }
    )

  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }



}
