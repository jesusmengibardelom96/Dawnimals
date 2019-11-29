import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    public disableInput : boolean;
  constructor() {
    this.disableInput = true;
  }
  public notify(){
    console.log("Toggled: " + this.disableInput);
  }
}
