import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipies.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css'],
})
export class RecipieListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe Olja',
      'This is a simple test Olja',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png'
    ),
    new Recipe(
      'Test Recipe Olja',
      'This is a simple test Olja',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
