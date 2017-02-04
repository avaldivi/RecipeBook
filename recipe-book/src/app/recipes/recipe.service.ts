import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy1', 'Dummy1', 'http://www.terameracake.com/wp-content/uploads/2015/05/Dummy-Couple-Small-size.jpg', [] ),
    new Recipe('Dummy2', 'Dummy2', 'http://www.terameracake.com/wp-content/uploads/2015/05/Dummy-Couple-Small-size.jpg', [] )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
