import { Injectable } from '@angular/core';
import {Hero} from '../../components/hero/hero.class';
import {HEROES} from './hero.mock';

@Injectable()
export class HeroService {
    constructor() { }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}