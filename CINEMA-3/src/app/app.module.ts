// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { MainComponent } from './main/main.component';
// import { AboutComponent } from './about/about.component';
// import { CategoriesComponent } from './categories/categories.component';
// import { ListComponent } from './list/list.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FooterComponent,
//     HeaderComponent,
//     MainComponent,
//     AboutComponent,
//     CategoriesComponent,
//     ListComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { CategoriesComponent } from './categories/categories.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    CategoriesComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
