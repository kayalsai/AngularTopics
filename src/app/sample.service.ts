import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  counter : number =50;
 
  constructor() { }

  add()
  {
    this.counter ++;
  }
}
