import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";


@Injectable()
export class RecipeService {

  recipesChangeed = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Dummy1', 'Dummy1', 'http://www.terameracake.com/wp-content/uploads/2015/05/Dummy-Couple-Small-size.jpg', [
      new Ingredient ( 'French Fries', 2),
      new Ingredient ( 'Pork Meat', 1)
    ] ),
    new Recipe('Dummy2', 'Dummy2', 'http://www.terameracake.com/wp-content/uploads/2015/05/Dummy-Couple-Small-size.jpg', [] )
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-3ecc0.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-3ecc0.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
            this.recipes = data;
            this.recipesChangeed.emit(this.recipes);
        }
      );
  }

}
