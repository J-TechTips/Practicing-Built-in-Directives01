import { Component } from '@angular/core';
class Button {

}
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'app';
 show: boolean = false;
 arr: any = [ ];
 time: string ='';
 state: string ='';

 displayText() {
   if (this.show === false){
     this.show = true;
   } else {
     this.show = false;
   }
   this.pushArr();
   console.log(this.displayText);
 }
 pushArr(){
   this.arr.push({
     this:Date(),
     state:this.show
   });
 }

}
