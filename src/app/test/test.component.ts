import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input("parentData")  names1:any;
  @Output() childEvent=new EventEmitter();

  message='Anu';
  visible=true;
  constructor() { }

  ngOnInit(): void {
  }
  outputEvent(){
    this.childEvent.emit('Hai,Hello Angular');
  }
}
