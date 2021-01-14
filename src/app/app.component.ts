import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  checkuser: boolean = true;


  onPressButton(){
    this.username = '';
    this.checkuser = true;
  }

  onInputText(event: any){
    if (this.username == ''){
      this.checkuser = true;
    }
    else{
      this.checkuser = false;
    };
  }

}
