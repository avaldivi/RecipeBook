import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.terameracake.com/wp-content/uploads/2015/05/Dummy-Couple-Small-size.jpg' )

  constructor() { }

  ngOnInit() {
  }

}
