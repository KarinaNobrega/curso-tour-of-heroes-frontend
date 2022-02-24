import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';



@NgModule({
  declarations: [HeroSearchComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeroSearchComponent
  ],
})
export class SharedModule { }
