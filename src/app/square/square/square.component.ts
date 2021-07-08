import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  constructor() {
   // setInterval(()=> this.random=Math.random(),500);

   }
  /*public dataSubject = new Subject<number>();
  public dataState = this.dataSubject.asObservable();

  public subjectdata(): void {
    interval(1000).subscribe(
      x => this.dataSubject.next((Math.floor(Math.random() * 200) - 100)));
  }*/
@Input() value:'X' | 'O' | undefined;

random = Math.random();

}
