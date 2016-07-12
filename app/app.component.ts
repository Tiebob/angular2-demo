import { Component } from '@angular/core';
import {HeroDetailComponent} from "./hero-detail.component";
@Component({
    directives: [HeroDetailComponent],
    selector: 'my-app',
    template:`
              <h1>{{title}}</h1>
              <h2>{{hero.name}} details!</h2>
              <div><label>
              id: </label>{{hero.id}}</div>
              <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
              </div>
             `
})


export class AppComponent {
    title: string = 'Hello, World';
    hero: Hero = {
        id: 1,
        name: '林老師'
    };
}

export class Hero {
    id: number;
    name: string;

    /*get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }

    set id( id: number ){
        this._id = id;
    }
    set name(name:string){
        this._name = name;
    }*/

    /*constructor(id, name){
        this.id = id;
        this.name = name;
    }*/
}

