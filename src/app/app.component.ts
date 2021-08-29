import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Learning!";
  isShow=true;
  Task="";
  name="";
  imgUrl="https://us.123rf.com/450wm/dazdraperma/dazdraperma1005/dazdraperma100500106/7056691-pile-book-with-red-apple-illustration-isolated-on-white-background.jpg?ver=6";
  isLogIn : boolean = false;
  isLogOut : boolean = true;
  color="green";
  names=["Anu","Abi","Keerthi","Anusri","Kayal"];
  names1="Orange";//input
  @ViewChild('maincontent') mainContent: any;
   @ViewChild('subcontent') subContent: any;
   todayDate=new Date()
 
   currency="500";
ok()
{
  this.Task="Click";

}
public changeMainContent()
    {
      console.log("changeMainContent");
      this.mainContent.nativeElement.setAttribute("style", "color:red");
    }
  
    public changeSubContent()
    {
      console.log("changeSubContent");
      this.subContent.nativeElement.setAttribute("style", "color:green");
      this.mainContent.nativeElement.setAttribute("style", "color:red");
    
    }
}
