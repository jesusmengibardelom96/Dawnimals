import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { myService } from '../data/data.services';
import { Animal } from '../model/animales.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.page.html',
  styleUrls: ['./add-animal.page.scss'],
})
export class AddAnimalPage implements OnInit {
  animal: Animal[] = [];
  imageNames: string[] = [];
  animalName: string;
  oldImage: any;
  data: any[];
  sendItem: any;
  labelMsg: string;
  constructor(private _myService: myService, private router: Router) {
    this.imageNames = ["assets/animales/monosBlancos.jpg", "assets/animales/nina.jpg", "assets/animales/rana.jpg", "assets/animales/cabasho.jpg", "assets/animales/hamster.jpg", "assets/animales/gatete.jpg"];
    this.data =
      [{
        "id": 1,
        "name": "Mono",
        "avatar": "assets/animales/monosBlancos.jpg"
      }, {
        "id": 2,
        "name": "Nina",
        "avatar": "assets/animales/nina.jpg"
      }, {
        "id": 3,
        "name": "Rana",
        "avatar": "assets/animales/rana.jpg"
      }, {
        "id": 4,
        "name": "Cabasho",
        "avatar": "assets/animales/cabasho.jpg"
      }, {
        "id": 5,
        "name": "Hamster",
        "avatar": "assets/animales/hamster.jpg"
      }, {
        "id": 6,
        "name": "Gatete",
        "avatar": "assets/animales/gatete.jpg"
      }];
    this.oldImage = {
      "id": 0,
      "name": "",
      "avatar": "",
      liked: false
    };
    this.animal = _myService.getData();
  }

  ngOnInit() {
    this.data.forEach((item) => {
      item['liked'] = false;
    });
  }
  likeImage(item) {
    if (this.oldImage.liked === false) {
      item.liked = true;
      this.oldImage = item;
    } else {
      item.liked = true;
      this.oldImage.liked = false;
      this.oldImage = item;
    }
  }
  addNimal() {
    if (this.animalName.trim() === "" || this.oldImage.liked === false) {
      this.labelMsg = "You can't make that!";
    } else {
      this.sendItem = {
        nombre: this.animalName,
        imagen: this.oldImage.avatar,
        audio: "assets/sonidos/cerdo.wav",
        duracion: 2,
        reproduciendo: false
      }
      this.labelMsg = "";
      this._myService.setData(this.sendItem);
      this.router.navigateByUrl("tabs");
    }
  }
  ionViewDidEnter() {
    this.oldImage.liked = false;
    this.animalName = "";
  }
}
