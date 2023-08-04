import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // name = 'Tushar Kaira';
  // site = window.location.href
  // currentVal:string = ""
  // getVal(event:any){
  //   console.log(event.target.value)
  //   this.currentVal=event.target.value;
  // }
  // show=false
  getValues(val:any){
    console.warn(val)
  }
}
