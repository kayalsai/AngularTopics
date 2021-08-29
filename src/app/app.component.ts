import { Component,OnInit,ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
   employees:object[]=[
    {emplId:1,name:"kani",location:"chennai"},
    {emplId:2,name:"kayal",location:"Tvm"},
    {emplId:3,name:"Anu",location:"vellore"},
    {emplId:4,name:"Deekshi",location:"Bangulore"},
    {emplId:5,name:"Varsha",location:"chennai"},

 ];
 profileForm!: FormGroup;
 ngOnInit(): void{
 this.profileForm = new FormGroup({
  name: new FormControl(''),
   dept: new FormControl(''),
 });
}
constructor()
{

}
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
    onSubmit()
    {


      console.log(this.profileForm.value);
      
    }
}
