import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    disableInput : boolean = true;
    forgotString : string = "Forgot your password?";
    name: string = "";
    passwd: string = "";
    labelMsg: string = "";
    validator: boolean  = true;

  constructor() {}

  notify(){
    console.log("Toggled: " + this.disableInput);
  }
  changeButtonString(){
    this.forgotString="Set your password";
  }
  validateInputs(){
    if(this.name.trim() === "" || this.passwd.trim() === ""){
      this.labelMsg = "You cannot make that!";
      this.validator = false;
    }else{
      this.labelMsg = "";
    }
  }
  validateInputs2(){
    if(this.validator === false){
      if(this.name.trim() === "" || this.passwd.trim() === ""){
        this.labelMsg = "You cannot make that!";
        this.validator = false;
      }else{
        this.labelMsg = "";
      }
    }
  }
}
