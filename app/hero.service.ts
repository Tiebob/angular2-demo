import {Injectable} from "@angular/core";

//noinspection TypeScriptCheckImport

import {Hero} from "./hero";
import {HEROES} from "./hero-mocks";

@Injectable()
export class HeroService {


    heroes: Hero[] = HEROES;

    getHeroes(){
        return Promise.resolve(HEROES);
        // return this.heroes;
    }
}