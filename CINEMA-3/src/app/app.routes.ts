import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CategoriesComponent } from "./categories/categories.component";
import { MainComponent } from "./main/main.component";
import { ListComponent } from "./list/list.component";

export const ROUTES: Routes = [
   {path: 'home', component: MainComponent},
   {path: 'sobre', component: AboutComponent},
   {path: 'categorias', component: CategoriesComponent},
   {path: 'lista', component: ListComponent}
];