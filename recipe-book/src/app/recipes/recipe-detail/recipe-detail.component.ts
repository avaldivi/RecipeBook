import {Component, OnInit, Input, OnDestroy} from '@angular/core';

import { Recipe } from '../recipe';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
  selectedRecipe: Recipe;

  constructor(
    private sls: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);

  }
  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  //prevents memory leaks when a recipe is deleted
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
