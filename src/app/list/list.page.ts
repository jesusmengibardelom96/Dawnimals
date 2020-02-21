import { Component, OnInit } from '@angular/core';
/* import { ANIMALES } from '../data/data.animales';
import { Animal } from '../model/animales.interface'; */
import { IonReorderGroup } from '@ionic/angular';
import { myService } from '../data/data.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  reorderGroup : IonReorderGroup;
  activacion : boolean = true;
  animales: any = [];
  audioAnimal = new Audio();
  savedAnimal: any;
  seAcabo: any;
  visibility: string = "";
  constructor(private _myService: myService, private router:Router) {
    this.animales = this._myService.getData();
  }

  infoAnimal(info) {
    console.log(info);
  }
  makeSound(animal) {
    if (this.savedAnimal === undefined) {
      this.audioAnimal.src = animal.audio;
      this.audioAnimal.load();
      this.audioAnimal.play();
      animal.reproduciendo = true;
      this.savedAnimal = animal;
      setTimeout(function () {
        animal.reproduciendo = false;
        console.log(animal.reproduciendo);
      }, (animal.duracion) * 1000);
    }else{
      this.savedAnimal.reproduciendo = false;
      this.audioAnimal.currentTime = 0;
      this.audioAnimal.pause();

      this.audioAnimal.src = animal.audio;
      this.audioAnimal.load();
      this.audioAnimal.play();
      animal.reproduciendo = true;
      this.savedAnimal = animal;
      this.seAcabo = setTimeout(function () {
        animal.reproduciendo = false;
        console.log(animal.reproduciendo);
      }, (animal.duracion) * 1000);
    }
  }
  stopSound(sound) {
    this.audioAnimal.pause();
    this.audioAnimal.currentTime = 0;
    sound.reproduciendo = false;
    clearTimeout(this.seAcabo);
  }
  deleteAnimal(i){
    this.animales.splice(i, 1);
  }
  editAnimal(animal, i){
    this.router.navigate(["/edit-mal", {wc: JSON.stringify(animal), cont: i}]);
  }
  addAnimal(){
    this.router.navigateByUrl("add-animal");
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.animales = this._myService.reset();
      event.target.complete();
    }, 2000);
  }
  doReorder(ev: any){
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    let draggedItem = this.animales.splice(ev.detail.from,1)[0];
     this.animales.splice(ev.detail.to,0,draggedItem)
     console.log(this.animales);
    ev.detail.complete();
  }
  toggleReorderGroup() {
    if(this.activacion === true){
      this.activacion = false;
      this.visibility = "hidden";
    }else{
      this.activacion =true;
      this.visibility = "";
    }
  }
  ngOnInit() {
  }

}
