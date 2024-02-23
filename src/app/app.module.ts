import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/headerChilds/navigation/navigation.component';
import { bottomNavbarComponent } from './components/headerChilds/bottom-navbar/bottom-navbar.component';
import { MainNavigationComponent } from './components/main-group/main-navigation/main-navigation.component';
import { MainSliderComponent } from './components/main-group/main-slider/main-slider.component';
import { SearchInputComponent } from './components/headerChilds/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    bottomNavbarComponent,
    NavigationComponent,
    MainNavigationComponent,
    MainSliderComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
