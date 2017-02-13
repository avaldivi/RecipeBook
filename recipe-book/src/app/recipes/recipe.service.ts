import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy1', 'Dummy1', 'http://www.terameracake.com/wp-content/uploads/2015/05/Dummy-Couple-Small-size.jpg', [
      new Ingredient ( 'French Fries', 2),
      new Ingredient ( 'Pork Meat', 1)
    ] ),
    new Recipe('Dummy2', 'Dummy2', 'http://www.terameracake.com/wp-content/uploads/2015/05/Dummy-Couple-Small-size.jpg', [] )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
