import {Injectable} from '@angular/core';
import {Animal} from '../model/animales.interface'
import { ANIMALES } from '../data/data.animales';
import { animalesClone } from './data.const';

@Injectable()

export class myService {
    /* private sharedData: Animal[] = []; */
    private clone : Animal [] = [];
    constructor (){
        /* const sharedData = animalesClone.slice(0); */
        this.clone = animalesClone.slice(0);
        localStorage.setItem("Guapo", JSON.stringify(this.clone));
    }

    setData(data){
        this.clone.push(data);
    }

    getData(){
        return this.clone;
    }

    reset(){
        /* const sharedData = ANIMALES.slice(0); */
        console.log("ANIMALES");
        console.log(ANIMALES);
        console.log("Shared before");
        console.log(this.clone);
        return this.clone = JSON.parse(localStorage.getItem("Guapo"));
        console.log("Shared after");
        console.log(this.clone);
    }
}
