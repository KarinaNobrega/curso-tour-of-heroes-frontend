import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    //FormsModule, para reconhecer o NgModel
    MaterialModule,
    RouterModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule
   ],
})
export class HeroesModule { }
