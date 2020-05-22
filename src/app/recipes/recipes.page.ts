import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [{
    id:'r1',
    title:'Title 1',
    imageUrl:'https://i.picsum.photos/id/305/300/300.jpg',
    ingredients:['material1','material2']
  },
  {
    id:'r2',
    title:'Title 2',
    imageUrl:'https://i.picsum.photos/id/301/300/300.jpg',
    ingredients:['material1','material2']
  }];
  constructor() { }

  ngOnInit() {
  }

}
