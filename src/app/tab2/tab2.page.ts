import { Component, OnInit } from '@angular/core';
/* import { ANIMALES } from '../data/data.animales';
import { Animal } from '../model/animales.interface'; */
import { myService } from '../data/data.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  animales: any = [];
  constructor(private _myService: myService, private router: Router) {
    this.animales = this._myService.getData();
  }

  addAnimal(){
    this.router.navigateByUrl("add-animal");
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.animales = this._myService.getData();
  }
}
