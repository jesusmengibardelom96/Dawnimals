import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { myService } from '../data/data.services';
@Component({
  selector: 'app-edit-mal',
  templateUrl: './edit-mal.page.html',
  styleUrls: ['./edit-mal.page.scss'],
})
export class EditMalPage implements OnInit {
  animales: any = [];
  wc: any;
  cont: number;
  animalName: string = "";
  validation: boolean;
  constructor(private router:ActivatedRoute, private _myService: myService, private route:Router) {
    this.animales = this._myService.getData().slice(0);
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.wc = JSON.parse(params['wc']);
      this.cont = params['cont'];
    });
    this.animalName = this.wc.nombre;
  }

  validator(){
    this.wc.nombre = this.animalName;
    console.log(this.wc.nombre);
      if(this.animalName.trim() === ""){
        this.validation = false;
        console.log("Es mas falso que un billete de 3 euros");
      }else{
        this.validation = true;
        this.animales[this.cont].nombre = this.wc.nombre;
        console.log(this.animales);
        this.route.navigateByUrl("tabs");
      }
  }
}
