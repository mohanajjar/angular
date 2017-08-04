import { Component } from '@angular/core';


export class Hero {
  id: number;
  name: string;
  username: string;
  email: string;
}
const HEROES: Hero[] = [
  { id: 1, name: 'Mr. najjar',username:'mohanajjar',email: 'mohanajjar@gmail.com' },
  { id: 2, name: 'Mr. salami',username:'mohanajjar',email: 'salami@gmail.com' },
  { id: 3, name: 'Mr. anna',username:'mohanajjar',email: 'salami@gmail.com' },
  { id: 4, name: 'Mr. Salim',username:'mohanajjar',email: 'salami@gmail.com' },
  { id: 5, name: 'Mr. Nice',username:'mohanajjar',email: 'salami@gmail.com' },
  { id: 6, name: 'Mr. Nice',username:'mohanajjar',email: 'salami@gmail.com' },
  { id: 7, name: 'Mr. Nice',username:'mohanajjar',email: 'salami@gmail.com' },
  { id: 8, name: 'Mr. Nice',username:'mohanajjar',email: 'salami@gmail.com' },
  { id: 9, name: 'Mr. Nice',username:'mohanajjar',email: 'salami@gmail.com' },
  { id: 10, name: 'Mr. Nice',username:'mohanajjar',email: 'salami@gmail.com' }
];

 
@Component({
  selector: 'my-app',
 templateUrl: './app.component.html',
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
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
//  selectedHero: Hero;
 
//  onSelect(hero: Hero): void {
//    this.selectedHero = hero;
//  }
}