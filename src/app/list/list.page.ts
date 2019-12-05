import { Component, OnInit } from '@angular/core';
import { ANIMALES } from './data/data.animales';
import { Animal } from './model/animales.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  animales: Animal[] = [];
  audioAnimal = new Audio();
  savedAnimal: any;
  seAcabo: any;
  constructor() {
    this.animales = ANIMALES.slice(0);
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
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      location.reload();
      event.target.complete();
    }, 2000);
  }
  ngOnInit() {
  }

}
