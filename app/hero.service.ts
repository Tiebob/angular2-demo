import {Injectable} from "@angular/core";

//noinspection TypeScriptCheckImport

import {Hero} from "./hero";
import {HEROES} from "./hero-mocks";
import {resolve} from "url";
import {resolve} from "dns";

@Injectable()
export class HeroService {


    heroes: Hero[] = HEROES;

    getHeroes(){
        return Promise.resolve(HEROES);
        // return this.heroes;
    }

    getHeroesSlowly()
    {
        return new Promise<Hero[]> (
            resolve => setTimeout( () => resolve(HEROES), 2000)
        );
    }
}