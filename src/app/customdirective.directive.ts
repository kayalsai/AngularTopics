import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private element:ElementRef ) { 
  element.nativeElement.style.color="pink";
  }
}
