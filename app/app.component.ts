import { Component, OnInit } from '@angular/core';

import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
// import {HeroService} from "./hero.service";


@Component({
    directives: [HeroDetailComponent],
    providers: [HeroService],
    selector: 'my-app',
    template:`
            <h2>My Heroes</h2>
            
            <ul class="heroes">
                <li *ngFor="let hero of heroes"
                    [class.selected] = "hero === selectedHero"
                    (click)="onSelect(hero)"
                >
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>
            
            <my-hero-detail [hero]="selectedHero"></my-hero-detail>
            
            <div *ngIf="selectedHero">
            <h2>{{selectedHero.name}} details!</h2>
            <div><label>id: </label>{{selectedHero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name"/>
            </div>
            </div>


             `,
    styles: [`
              .selected {
                background-color: #CFD8DC !important;
                color: white;
              }
              .heroes {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
              }
              .heroes li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
              }
              .heroes li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
              }
              .heroes li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
              }
              .heroes .text {
                position: relative;
                top: -3px;
              }
              .heroes .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
              }
            `]
})


export class AppComponent implements OnInit{
    ngOnInit() {
        // this.getHeroes();
        // this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroesSlowly().then( heroes => this.heroes = heroes );
    }

    heroes: Hero[];
    selectedHero : Hero;


    onSelect(hero : Hero){
        this.selectedHero = hero;
    }


    // 建構子
    constructor( private heroService: HeroService) {

    }
}
