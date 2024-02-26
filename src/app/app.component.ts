import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VineforceAnkushKumar';
  countries =[
    {id: 1, name: 'USA'},
    {id: 2, name: 'Canada'}
  ];

  // states =[
  //   {name: 'New York'},
  //   {name: 'California'},
  //   {name: 'Ontario'},
  //   {name: 'British columbia'}
  // ];
  // cities =[
  //   {name: 'New York city'},
  //   {name: 'Los Angeles'},
  //   {name: 'Toronto'},
  //   {name: 'Vancouver'}
  // ];



  states ={
    1:  [
      {id: 1, name: 'New York'},
      {id: 2, name: 'California'}
    ],
    2: [
      {id: 1, name: 'Ontario'},
      {id: 2, name: 'British columbia'}
    ]
  };
  cities ={
    1: [
      {id: 1, name: 'New York city'},
      {id: 2, name: 'Los Angeles'}
    ],
    2: [
      {id: 1, name: 'Toronto'},
      {id: 2, name: 'Vancouver'}
    ]
  };

  selectcountryId: number= 0;
  selectstateId: number=0;
  selectcityId: number= 0;

  onCountryChange(){
    this.selectstateId= 0;
    this.selectcityId=0;
  }
  onStateChange(){
    this.selectcityId=0;
  }

}
