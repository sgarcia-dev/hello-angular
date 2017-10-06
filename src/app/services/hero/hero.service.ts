import {
  Injectable
} from '@angular/core';
import {
  Headers,
  Http
} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {
  Hero
} from '../../components/hero/hero.class';
import {
  HEROES
} from './hero.mock';

@Injectable()
export class HeroService {
  private HERO_API_URL = 'api/heroes';
  private REQ_HEADERS = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {}

  getHero(id: number): Promise < Hero > {
    const url = `${this.HERO_API_URL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  getHeroes(): Promise < Hero[] > {
    return this.http.get(this.HERO_API_URL)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  create(name: string): Promise < Hero > {
    return this.http
      .post(this.HERO_API_URL, JSON.stringify({
        name: name
      }), {
        headers: this.REQ_HEADERS
      })
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise < Hero > {
    const url = `${this.HERO_API_URL}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {
        headers: this.REQ_HEADERS
      })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise < void > {
    const url = `${this.HERO_API_URL}/${id}`;
    return this.http.delete(url, {
        headers: this.REQ_HEADERS
      })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise < any > {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
