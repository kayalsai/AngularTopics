import { Component, OnInit } from '@angular/core';

import { SampleService } from '../sample.service';
@Component({
  selector: 'app-ssample',
  templateUrl: './ssample.component.html',
  styleUrls: ['./ssample.component.css']
})
export class SsampleComponent implements OnInit {
 

  constructor(public _sample:SampleService) { }

  ngOnInit(): void {
  }
  Increase()
  {
    this._sample.add();
  }
  

}
