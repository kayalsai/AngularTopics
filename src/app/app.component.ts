import { Component } from '@angular/core';

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


ok()
{
  this.Task="Click";

}
}
