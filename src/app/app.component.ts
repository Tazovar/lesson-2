import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name:string = "tazo";
  number:number = 214;
  array:Array<any> = [1,2,true,undefined,NaN,false,true,"tazo"]


  constructor(){
    console.log(this.name)
    console.log(this.number);
    console.log(this.array);
  }
}
